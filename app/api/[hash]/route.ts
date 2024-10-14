'use server';

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { decodeBase62 } from '@/app/utils/b62_helper';

export async function GET(
  req: NextRequest,
  { params }: { params: { hash: string } }
) {
  const { hash } = params;

  const decoded_id = decodeBase62(hash);
  const data = await prisma.url.findUnique({
    where: {
      id: decoded_id,
    },
  });

  if (!data) {
    return NextResponse.json(
      { message: 'Redirect not found' },
      { status: 404 }
    );
  }

  const decoded_url = data.original_url;
  
  await prisma.urlAnalytics.upsert({
    where: {
      url_id: decoded_id, // This should match the unique key in your model
    },
    create: {
      url_id: decoded_id,
      total_visits: 1,
    },
    update: {
      total_visits: {
        increment: 1,
      },
    },
  });

  return NextResponse.redirect(decoded_url);
}
