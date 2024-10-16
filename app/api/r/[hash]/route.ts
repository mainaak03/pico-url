'use server';

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { decodeBase62 } from '@/app/utils/b62_helper';

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path.length < 4) {
    return NextResponse.json({ status: 400 });
  }
  const hash = req.nextUrl.pathname.substring(3);

  const decoded_id = decodeBase62(hash);
  const data = await prisma.url.findUnique({
    where: {
      id: decoded_id,
    },
  });

  if (!data) {
    return NextResponse.json({ status: 404 });
  }

  const decoded_url = data.original_url;

  await prisma.url.update({
    where: {
      id: decoded_id,
    },
    data: {
      total_visits: {
        increment: 1,
      },
    },
  });

  return NextResponse.redirect(decoded_url);
}
