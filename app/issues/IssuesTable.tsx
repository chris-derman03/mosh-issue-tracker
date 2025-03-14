import React from "react";
import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";

const IssuesTable = async () => {
    const issues = await prisma.issue.findMany();

    return (
        <Table.Root className="w-full" variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell className="THEMED">
                        Issue
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="THEMED">
                        Status
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="THEMED">
                        Created
                    </Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {issues.map((issue, index) => (
                    <Table.Row key={"Issue_Row_" + index}>
                        <Table.RowHeaderCell className="THEMED THEMED-text3">
                            {issue.title}
                        </Table.RowHeaderCell>
                        <Table.Cell className="THEMED THEMED-text3">
                            {issue.status}
                        </Table.Cell>
                        <Table.Cell className="THEMED THEMED-text3">
                            {issue.createdAt.toDateString()}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default IssuesTable;
