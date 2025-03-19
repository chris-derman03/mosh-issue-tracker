import { prisma } from "@/prisma/client";
import { Avatar, Table } from "@radix-ui/themes";
import React from "react";
import StatusBadge from "./components/StatusBadge";
import Link from "next/link";

const LatestIssues = async () => {
    const latestIssues = await prisma.issue.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        include: {
            assignedToUser: true,
        },
    });

    return (
        <Table.Root variant="surface">
            <Table.Body>
                {latestIssues.map((issue) => (
                    <Table.Row key={issue.id}>
                        <Table.Cell>
                            <div className="flex justify-between items-center gap-20">
                                <Link
                                    href={`/issues/${issue.id}`}
                                    className="THEMED-text5"
                                >
                                    {issue.title}
                                </Link>
                                <div className="flex items-center gap-2">
                                    <StatusBadge status={issue.status} />
                                    {issue.assignedToUserId && (
                                        <Avatar
                                            src={issue.assignedToUser!.image!}
                                            fallback="?"
                                        />
                                    )}
                                </div>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default LatestIssues;
