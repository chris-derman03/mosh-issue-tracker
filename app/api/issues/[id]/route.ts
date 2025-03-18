import authOptions from "@/app/auth/authOptions";
import { issueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest, 
    {params}: {params: Promise<{id: string}>}) 
{
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({error: "You are not an authenticated user."}, {status: 401});

    const body = await request.json();
    const { id } = await params;

    const zodValidation = issueSchema.safeParse(body);
        if (!zodValidation.success)
            return NextResponse.json(zodValidation.error.format(), {status: 400})

    const issue = await prisma.issue.findUnique({
        where: {id: id}
    })

    if (!issue)
        return NextResponse.json({error: 'Invalid Issue'}, {status: 404})

    const updatedIssue = await prisma.issue.update({
        where: {id: id},
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(updatedIssue);
}

export async function DELETE(
    request: NextRequest, 
    {params}: {params: Promise<{id: string}>}) 
{
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({error: "You are not an authenticated user."}, {status: 401});
    
    const { id } = await params;

    const issue = await prisma.issue.findUnique({
        where: {id: id}
    })

    if (!issue)
        return NextResponse.json({error: 'Invalid Issue'}, {status: 404})

    await prisma.issue.delete({
        where: {id: id}
    });

    return NextResponse.json({});
}