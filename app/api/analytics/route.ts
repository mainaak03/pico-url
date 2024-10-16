'use server';

import { NextRequest, NextResponse } from "next/server";
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const idStrings = searchParams.getAll("ids");

        const decoded_ids = idStrings.map(id => BigInt(id));

        const analytics = await prisma.url.findMany({
            where: {
                id: {
                    in: decoded_ids,
                }
            }
        });

        const serializableAnalytics = analytics.map((item, index) => ({
            key: index,
            encoded_url: item.encoded_url,
            created_at: item.created_at.toUTCString(),
            total_visits: item.total_visits,
            last_accessed: item.last_accessed.toUTCString(),
        }));
        
        return NextResponse.json(serializableAnalytics);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
          );
    }
}
  