'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import { encodeBase62 } from './utils/b62_helper';

const REG = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

const schema = z.object({
  original_url: z.string().url({
    message: 'Invalid URL',
  }),
  password: z.string().regex(REG, {
    message:
      'Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.',
  }),
});

export const createShortUrl = async (_prevState: unknown, data: FormData) => {
  console.log(data.get('cf-turnstile-response'));

  const token = data.get('cf-turnstile-response');
  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  try {
    const result = await fetch(url, {
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    
    if (!result.success) {
      return {
        server_error: "Invalid CAPTCHA",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      server_error: 'CAPTCHA Error',
    };
  }
  
  const validatedData = schema.safeParse({
    original_url: data.get('original_url'),
    password: data.get('password'),
  });

  if (!validatedData.success) {
    console.log(validatedData.error.flatten().fieldErrors);
    const errors = validatedData.error.flatten().fieldErrors;
    return {
      url_error: errors.original_url,
      password_error: errors.password,
    };
  }

  try {
    const savedData = await prisma.url.create({
      data: validatedData.data,
    });
    const shortUrl: string = encodeBase62(savedData.id);
    return {
      message: process.env.DOMAIN_URL + shortUrl,
    };
  } catch (error) {
    console.log(error);
    return {
      server_error: 'Could not pico-fy your URL',
    };
  }
};
