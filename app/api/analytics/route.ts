'use server';

import { NextRequest, NextResponse } from "next/server";
import prisma from '@/lib/prisma';
import { encodeBase62 } from "@/app/utils/b62_helper";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const idStrings = searchParams.getAll("ids");

        const decoded_ids = idStrings.map(id => BigInt(id));
        const analytics = await prisma.urlAnalytics.findMany({
            where: {
                url_id: {
                    in: decoded_ids,
                }
            }
        });

        const serializableAnalytics = analytics.map((item, index) => ({
            key: index,
            ...item,
            last_accessed: item.last_accessed.toUTCString(),
            url_id: process.env.DOMAIN_URL + encodeBase62(item.url_id),
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
  