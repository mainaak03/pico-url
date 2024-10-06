'use server'

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { encodeBase62 } from "../../utils/b62_helper";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const original_url = data.original_url;

    if (!original_url) {
        return NextResponse.json(
            { message: "Original URL can not be null" },
            { status: 400 }
        );
    }

    try {
        const url_data = await prisma.url.create({
            data: {
                original_url: original_url,
            }
        });
        const b62 = encodeBase62(url_data.id);
        const encodedUrl = process.env.DOMAIN_URL + b62;
        return NextResponse.json(
            { short_url: encodedUrl },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
};