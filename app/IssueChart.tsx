"use client";
import { Card } from "@radix-ui/themes";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";
import React from "react";

interface Params {
    open: number;
    inProgress: number;
    closed: number;
}

const IssueChart = ({ open, inProgress, closed }: Params) => {
    const data = [
        { label: "Open", value: open },
        { label: "In-Progress", value: inProgress },
        { label: "Closed", value: closed },
    ];

    return (
        <Card className="THEMED">
            <ResponsiveContainer width={"100%"} height={300}>
                <BarChart data={data}>
                    <XAxis dataKey={"label"} />
                    <YAxis />
                    <Bar
                        dataKey={"value"}
                        barSize={60}
                        style={{ fill: `var(--accent-8)` }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default IssueChart;
