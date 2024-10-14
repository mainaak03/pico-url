'use server';

import { decodeBase62 } from "@/app/utils/b62_helper";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,
    { params }: { params: { hash: string } }
) {
        
    const { hash }= params;
    
    if (!hash) {
        return NextResponse.json({
            message: "Hash can not be empty"
        });
    }

    const url_id = decodeBase62(hash);
    
    try {
        const analyticsData = await prisma.urlAnalytics.findFirst({
            where: {
                url_id: url_id,
            }
        });

        if (!analyticsData) {
            return NextResponse.json(
                { message: 'No analytics found' },
                { status: 400 }
              );
        }

        const response = {
            id: analyticsData.url_id.toString(),
            total_visits: analyticsData.total_visits,
            last_accessed: analyticsData.last_accessed.toUTCString(),
        };
        
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
          );
    }
}
  