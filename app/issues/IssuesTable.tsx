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

const columns: {
    label: string;
    value: keyof Issue;
    className?: string;
    sortIcon: string;
}[] = [
    {
        label: "Issue",
        value: "title",
        className: "THEMED THEMED-text-md",
        sortIcon: "",
    },
    {
        label: "Status",
        value: "status",
        className: "hidden md:table-cell THEMED THEMED-text-md",
        sortIcon: "",
    },
    {
        label: "Created",
        value: "createdAt",
        className: "hidden md:table-cell THEMED THEMED-text-md",
        sortIcon: ":Oldest",
    },
];

const statuses = Object.values(Status);

interface Params {
    URLStatusFilter: Status;
    URLSortOrder: keyof Issue;
}

const IssuesTable = async ({ URLStatusFilter, URLSortOrder }: Params) => {
    // Validate the status filter param
    const validatedStatusFilterBy = statuses.includes(URLStatusFilter)
        ? URLStatusFilter
        : undefined;

    // Validate the sort order param
    const prismaSortOrder = columns
        .map((column) => column.value)
        .includes(URLSortOrder)
        ? { [URLSortOrder]: "asc" }
        : undefined;

    const issues = await prisma.issue.findMany({
        where: {
            status: validatedStatusFilterBy,
        },
        orderBy: prismaSortOrder,
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
                                {column.value === URLSortOrder && (
                                    <span className="THEMED-text-sm">
                                        {column.sortIcon || (
                                            <FaArrowUpLong size={14} />
                                        )}
                                    </span>
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
