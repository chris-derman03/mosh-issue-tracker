import authOptions from "@/app/auth/authOptions";
import { patchIssueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// Edit the fields of a given Issue
export async function PATCH(
    request: NextRequest, 
    {params}: {params: Promise<{id: string}>}) 
{
    // Only authenticated users can make patches
    // const session = await getServerSession(authOptions);
    // if (!session)
    //     return NextResponse.json({error: "You are not an authenticated user."}, {status: 401});

    const patchingIssueId = await params.then(res => res.id);

    // Does the issue exist
    const issue = await prisma.issue.findUnique({
        where: {id: patchingIssueId}
    })
    if (!issue)
        return NextResponse.json({error: 'Issue not found.'}, {status: 404})

    // Validate the request
    const requestBody = await request.json();
    const zodValidation = patchIssueSchema.safeParse(requestBody);
        if (!zodValidation.success)
            return NextResponse.json(zodValidation.error.format(), {status: 400})

    const { title, description, assignedToUserId } = requestBody;

    // If assigning a user, check if that user exists
    if (assignedToUserId) {
        const user = await prisma.user.findUnique({
            where: { id: assignedToUserId }
        })
        if (!user)
            return NextResponse.json({error: "User not found."}, {status: 400})
    }

    const updatedIssue = await prisma.issue.update({
        where: {id: patchingIssueId},
        data: {
            title,
            description,
            assignedToUserId
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