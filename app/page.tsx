import { Grid } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";
import { prisma } from "@/prisma/client";
import IssueChart from "./IssueChart";
import { Metadata } from "next";

export default async function Home() {
    const open = await prisma.issue.count({ where: { status: "OPEN" } });
    const inProgress = await prisma.issue.count({
        where: { status: "IN_PROGRESS" },
    });
    const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

    return (
        <Grid columns={{ initial: "1", md: "2" }} className="my-20" gap="5">
            <div className="flex flex-col gap-5">
                <IssueSummary
                    open={open}
                    inProgress={inProgress}
                    closed={closed}
                />
                <IssueChart
                    open={open}
                    inProgress={inProgress}
                    closed={closed}
                />
            </div>
            <div className="flex flex-col justify-between">
                <p className="THEMED THEMED-text1">Latest Issues</p>
                <LatestIssues />
            </div>
        </Grid>
    );
}

export const metadata: Metadata = {
    title: "Issue Tracker - Dashboard",
    description: "View a summary of all issues.",
};
