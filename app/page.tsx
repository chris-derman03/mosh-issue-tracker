import { Card } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";
import { prisma } from "@/prisma/client";
import IssueChart from "./IssueChart";

export default async function Home() {
    const open = await prisma.issue.count({ where: { status: "OPEN" } });
    const inProgress = await prisma.issue.count({
        where: { status: "IN_PROGRESS" },
    });
    const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

    return (
        <div className="w-full flex justify-center my-20">
            <Card className="THEMED">
                <div className="flex flex-col gap-7">
                    <p className="THEMED THEMED-text1">Latest Issues</p>
                    <LatestIssues />
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
            </Card>
        </div>
    );
}
