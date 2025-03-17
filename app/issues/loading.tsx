import React from "react";
import { Table } from "@radix-ui/themes";
import "react-loading-skeleton/dist/skeleton.css";
import ThemedSkeleton from "../components/ThemedSkeleton";

const issues = [1, 2, 3, 4, 5]; // Dummies

const LoadingIssuesPage = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="h-[100px] flex items-center">Loading...</div>
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
                            <Table.RowHeaderCell className="flex justify-between">
                                <ThemedSkeleton
                                    width="50%"
                                    containerClassName="flex-9/10"
                                />
                                <div className="flex-1/10 block md:hidden">
                                    <ThemedSkeleton width="100%" />
                                </div>
                            </Table.RowHeaderCell>
                            <Table.Cell className="hidden md:table-cell">
                                <ThemedSkeleton width="20%" />
                            </Table.Cell>
                            <Table.Cell className="hidden md:table-cell">
                                <ThemedSkeleton width="35%" />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    );
};

export default LoadingIssuesPage;
