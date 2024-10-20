'use server';

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';

async function analyticsRoute(req:NextRequest) {
  const res = new NextResponse();
  const session = await getSession(req, res);

  if (!session || !session.user) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  console.log(session.user);
  
  const analytics = await prisma.url.findMany({
    where: {
      email: session.user.email,
    }
  });

  const serializableAnalytics = analytics.map((item, index) => ({
          key: index,
          encoded_url: item.encoded_url,
          original_url: item.original_url,
          description: item.description,
          created_at: item.created_at.toUTCString(),
          total_visits: item.total_visits,
          last_accessed: item.last_accessed.toUTCString(),
        }));

  return NextResponse.json({
    serializableAnalytics,
    id: session.user.sub,
  }, res);
}

export const GET = withApiAuthRequired(analyticsRoute);
