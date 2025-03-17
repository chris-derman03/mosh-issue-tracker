import React from "react";
import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import StatusBadge from "../components/StatusBadge";
import Link from "next/link";

const IssuesTable = async () => {
    const issues = await prisma.issue.findMany();

    return (
        <Table.Root className="w-full" variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell className="THEMED">
                        Issue
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="hidden md:table-cell THEMED">
                        Status
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="hidden md:table-cell THEMED">
                        Created
                    </Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {issues.map((issue, index) => (
                    <Table.Row key={"Issue_Row_" + index}>
                        <Table.RowHeaderCell className="flex between justify-between THEMED THEMED-text3">
                            <Link
                                href={`/issues/${issue.id}`}
                                className="THEMED-text5"
                            >
                                {issue.title}
                            </Link>
                            <div className="block md:hidden">
                                <StatusBadge status={issue.status} />
                            </div>
                        </Table.RowHeaderCell>
                        <Table.Cell className="hidden md:table-cell THEMED THEMED-text3">
                            <StatusBadge status={issue.status} />
                        </Table.Cell>
                        <Table.Cell className="hidden md:table-cell THEMED THEMED-text3">
                            {issue.createdAt.toDateString()}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default IssuesTable;
