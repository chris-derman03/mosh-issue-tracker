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
        <div className="flex flex-col items-center gap-2 mt-20">
            <div className="mb-8 flex flex-col items-center">
                <p className="THEMED-text1">{issue.title}</p>
                <StatusBadge status={issue.status} />
            </div>
            <p>{issue.createdAt.toDateString()}</p>
            <p>{issue.description}</p>
        </div>
    );
};

export default IssueDetailPage;
