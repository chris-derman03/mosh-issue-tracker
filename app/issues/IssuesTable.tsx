import React from "react";
import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";

const IssuesTable = async () => {
    const issues = await prisma.issue.findMany();

    return (
        <Table.Root className="w-full" variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {issues.map((issue, index) => (
                    <Table.Row key={"Issue_Row_" + index}>
                        <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
                        <Table.Cell>{issue.status}</Table.Cell>
                        <Table.Cell>
                            {issue.createdAt.toDateString()}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default IssuesTable;
