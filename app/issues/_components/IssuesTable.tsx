import React from "react";
import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import { Issue, Status } from "@prisma/client";
import Pagination from "../../components/Pagination";
import IssueTableHeader from "./IssueTableHeader";
import IssueTableBody from "./IssueTableBody";
import { columnVals } from "./IssuesTableProperties";

const statuses = Object.values(Status);
const pageSize = 10;

interface Params {
    URLstatusFilter: Status;
    URLsortOrder: keyof Issue;
    URLpage: number;
}

const IssuesTable = async ({
    URLstatusFilter,
    URLsortOrder,
    URLpage,
}: Params) => {
    // Validate the status filter param
    const validatedStatusFilterBy = statuses.includes(URLstatusFilter)
        ? URLstatusFilter
        : undefined;

    // Validate the sort order param
    const prismaSortOrder = columnVals.includes(URLsortOrder)
        ? { [URLsortOrder]: "asc" }
        : undefined;

    // Get all sorted, filtered, and paginated records
    const issuesToRender = await prisma.issue.findMany({
        where: {
            status: validatedStatusFilterBy,
        },
        orderBy: prismaSortOrder,
        skip: (URLpage - 1) * pageSize,
        take: pageSize,
    });

    // How many records will be rendered
    const issueCount = await prisma.issue.count({
        where: {
            status: validatedStatusFilterBy,
        },
    });

    return (
        <>
            <Table.Root className="w-full" variant="surface">
                <IssueTableHeader
                    statusFilter={URLstatusFilter}
                    sortOrder={URLsortOrder}
                />

                <IssueTableBody issueData={issuesToRender} />
            </Table.Root>

            <Pagination
                itemCount={issueCount}
                pageSize={pageSize}
                currentPage={URLpage}
            />
        </>
    );
};

export default IssuesTable;
