import React from "react";
import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import StatusBadge from "../components/StatusBadge";
import Link from "next/link";
import { Issue, Status } from "@prisma/client";

import dynamic from "next/dynamic";
const FaArrowUpLong = dynamic(() =>
    import("react-icons/fa6").then((mod) => mod.FaArrowUpLong)
);

const columns: { label: string; value: keyof Issue; className?: string }[] = [
    { label: "Issue", value: "title", className: "THEMED" },
    {
        label: "Status",
        value: "status",
        className: "hidden md:table-cell THEMED",
    },
    {
        label: "Created",
        value: "createdAt",
        className: "hidden md:table-cell THEMED",
    },
];

const statuses = Object.values(Status);

interface Params {
    statusFilterBy: Status;
    orderBy: keyof Issue;
}

const IssuesTable = async ({ statusFilterBy, orderBy }: Params) => {
    // Validate the status filter param
    const validatedStatusFilterBy = statuses.includes(statusFilterBy)
        ? statusFilterBy
        : undefined;

    const issues = await prisma.issue.findMany({
        where: {
            status: validatedStatusFilterBy,
        },
    });

    return (
        <Table.Root className="w-full" variant="surface">
            <Table.Header>
                <Table.Row>
                    {columns.map((column) => (
                        <Table.ColumnHeaderCell
                            key={column.value}
                            className={column.className}
                        >
                            <div className="flex gap-1 items-center w-[100px]">
                                <Link
                                    href={{
                                        query: {
                                            status: validatedStatusFilterBy,
                                            orderBy: column.value,
                                        },
                                    }}
                                >
                                    {column.label}
                                </Link>
                                {column.value === orderBy && (
                                    <FaArrowUpLong size={14} />
                                )}
                            </div>
                        </Table.ColumnHeaderCell>
                    ))}
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
