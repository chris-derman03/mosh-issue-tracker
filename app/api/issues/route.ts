import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/prisma/client";
import { createIssueSchema } from "../../validationSchemas";

// API CALLS to /api/issues

export async function POST(request: NextRequest) {
    const body = await request.json();

    const zodValidation = createIssueSchema.safeParse(body);
    if (!zodValidation.success)
        return NextResponse.json(zodValidation.error.format(), {status: 400})

    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(newIssue, { status: 201 })
}