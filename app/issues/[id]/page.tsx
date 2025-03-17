import React from "react";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import StatusBadge from "@/app/components/StatusBadge";

const IssueDetailPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const issue = await prisma.issue.findUnique({
        where: { id: id },
    });

    if (!issue) notFound();

    return (
        <div className="w-8/10 flex flex-col items-center gap-15 mt-20">
            <div className="flex flex-col items-center">
                <p className="THEMED THEMED-text1 mb-0">{issue.title}</p>
                <p className="mb-1">{issue.createdAt.toDateString()}</p>
                <StatusBadge status={issue.status} />
            </div>
            <div className="w-full flex p-5 border-1 rounded-md">
                <p className="THEMED">{issue.description}</p>
            </div>
        </div>
    );
};

export default IssueDetailPage;
