'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import { encodeBase62 } from './utils/b62_helper';
import { getSession } from '@auth0/nextjs-auth0';

const schema = z.object({
  original_url: z.string().url({
    message: 'Invalid URL',
  }),
  description: z.string().min(0).max(50, {
    message: 'Description can have at most 50 characters'
  }),
  email: z.string().email().optional(),
});

export const createShortUrl = async (_prevState: unknown, data: FormData) => {
  const session = await getSession();

  let email: string|null = null;
  
  if (session && session.user) {
    email = session.user.email;
  }
  
  const validatedData = schema.safeParse({
    original_url: data.get('original_url'),
    description: data.get('description'),
    email: email,
  });

  if (!validatedData.success) {
    console.log(validatedData.error.flatten().fieldErrors);
    const errors = validatedData.error.flatten().fieldErrors;
    return {
      url_error: errors.original_url,
      description_error: errors.description,
    };
  }

  try {
    const savedData = await prisma.url.create({
      data: {
        original_url: validatedData.data.original_url,
        description: validatedData.data.description,
        encoded_url: '',
        email: email,
      },
    });

    const encodedId = encodeBase62(savedData.id);
    const shortUrl = process.env.DOMAIN_URL + encodedId;

    try {
      const updatedData = await prisma.url.update({
        where: {
          id: savedData.id,
        },
        data: {
          encoded_url: shortUrl,
        },
      });
      return {
        message: updatedData.encoded_url,
      };
    } catch (error) {
      console.log(error);
      return {
        server_error: 'DB error',
      };
    }
  } catch (error) {
    console.log(error);
    return {
      server_error: 'Could not pico-fy your URL',
    };
  }
};
