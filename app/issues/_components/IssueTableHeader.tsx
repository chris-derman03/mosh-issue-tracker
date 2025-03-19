import { Table } from "@radix-ui/themes";
import Link from "next/link";
import columns from "./IssuesTableProperties";
import { Issue, Status } from "@prisma/client";

import dynamic from "next/dynamic";
const FaArrowUpLong = dynamic(() =>
    import("react-icons/fa6").then((mod) => mod.FaArrowUpLong)
);

interface Params {
    statusFilter: Status;
    sortOrder: keyof Issue;
}

const IssueTableHeader = ({ statusFilter, sortOrder }: Params) => {
    return (
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
                                        status: statusFilter,
                                        orderBy: column.value,
                                    },
                                }}
                            >
                                {column.label}
                            </Link>
                            {column.value === sortOrder && (
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
    );
};

export default IssueTableHeader;
