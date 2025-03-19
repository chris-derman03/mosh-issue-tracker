import { Status } from "@prisma/client";
import { Card } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Params {
    open: number;
    inProgress: number;
    closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Params) => {
    const containers: { label: string; value: number; status: Status }[] = [
        { label: "Open Issues", value: open, status: "OPEN" },
        {
            label: "In-Progress Issues",
            value: inProgress,
            status: "IN_PROGRESS",
        },
        { label: "Closed Issues", value: closed, status: "CLOSED" },
    ];

    return (
        <div className="flex gap-4">
            {containers.map((container) => (
                <Card key={container.label} className="THEMED">
                    <div className="flex flex-col items-center">
                        <Link
                            href={`/issues?status=${container.status}`}
                            className="THEMED-text2"
                        >
                            {container.label}
                        </Link>
                        <p className="THEMED-text-md">{container.value}</p>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default IssueSummary;
