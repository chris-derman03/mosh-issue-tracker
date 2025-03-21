import React, { cache } from "react";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import StatusBadge from "@/app/components/StatusBadge";
import RouteButton from "@/app/components/RouteButton";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";

interface Params {
    params: Promise<{ id: string }>;
}

const fetchIssue = cache((issueId: string) =>
    prisma.issue.findUnique({ where: { id: issueId } })
);

const IssueDetailPage = async ({ params }: Params) => {
    const session = await getServerSession(authOptions);
    const { id } = await params;
    const issue = await fetchIssue(id);

    if (!issue) notFound();

    return (
        <div className="w-8/10 flex flex-col items-center my-5">
            <div className="w-full mb-15">
                <RouteButton
                    text="Issues"
                    route={`/issues`}
                    returnIcon
                    className="THEMED-text-sm"
                />
            </div>

            <div className="flex flex-col items-center mb-10">
                <p className="THEMED THEMED-text1 mb-0">{issue.title}</p>
                <p className="mb-1">{issue.createdAt.toDateString()}</p>
                <StatusBadge status={issue.status} />
            </div>

            <div className="mb-5 w-full flex justify-between">
                <RouteButton
                    text=""
                    route={`/issues/${issue.id}/edit`}
                    editIcon
                    className="THEMED-text-md"
                />
                <div className="flex gap-4 items-center justify-center">
                    <AssigneeSelect issue={issue} />
                    {session && <DeleteIssueButton issueId={issue.id} />}
                </div>
            </div>

            <div className="w-full flex p-5 border-1 rounded-md">
                <p className="THEMED">{issue.description}</p>
            </div>
        </div>
    );
};

export async function generateMetadata({ params }: Params) {
    const { id } = await params;
    const issue = await fetchIssue(id);

    return {
        title: `${issue?.title}`,
        description: `Issue detail page. Issue description page. View an issue. See an issue. Specific issue page. Showing issue ${issue?.title}. ${issue?.description}`,
    };
}

export default IssueDetailPage;
