"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

const statuses: { label: string; value: Status | "-1" }[] = [
    { label: "All", value: "-1" },
    { label: "Open", value: "OPEN" },
    { label: "Closed", value: "CLOSED" },
    { label: "In Progress", value: "IN_PROGRESS" },
];

const IssueStatusFilter = () => {
    return (
        <Select.Root>
            <Select.Trigger placeholder="Filter by status..." />
            <Select.Content>
                {statuses.map((status) => (
                    <Select.Item
                        key={"status_filter_" + status.value}
                        value={status.value}
                    >
                        {status.label}
                    </Select.Item>
                ))}
            </Select.Content>
        </Select.Root>
    );
};

export default IssueStatusFilter;
