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
  const data = await prisma.url.findFirst({
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

  const decoded_url = data?.original_url;

  return NextResponse.redirect(decoded_url);
}
