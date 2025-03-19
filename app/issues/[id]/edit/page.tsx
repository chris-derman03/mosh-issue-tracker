import React from "react";
import IssueForm from "../../_components/IssueForm";
import RouteButton from "@/app/components/RouteButton";
import { prisma } from "@/prisma/client";
import { Metadata } from "next";

interface Params {
    params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: Params) => {
    const { id } = await params;
    const issue = await prisma.issue.findUnique({
        where: { id: id },
    });

    return (
        <div className="w-8/10 h-[800px] flex flex-col my-5">
            <div className="absolute">
                <RouteButton
                    text={"Cancel"}
                    route={`/issues/${issue?.id}`}
                    returnIcon
                    className="THEMED-text-sm"
                />
            </div>
            <div className="flex items-center h-full">
                <IssueForm title="Modify Issue" issue={issue} />
            </div>
        </div>
    );
};

export const metadata: Metadata = {
    title: "Issue Tracker - Edit Issue",
    description:
        "Edit the title or description of an issue. Edit issue. Modify issue. Change issue.",
};

export default EditIssuePage;
