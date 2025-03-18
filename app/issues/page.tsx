import React from "react";
import RouteButton from "../components/RouteButton";
import IssuesTable from "./IssuesTable";
import IssueStatusFilter from "./IssueStatusFilter";
import { Status } from "@prisma/client";

interface Params {
    searchParams: Promise<{ status: Status }>;
}

const IssuesPage = async ({ searchParams }: Params) => {
    const { status } = await searchParams;

    return (
        <div className="w-full flex flex-col items-center">
            <div className="h-[100px] flex items-center">
                <RouteButton text={"New Issue"} route={"/issues/new"} />
            </div>
            <div className="w-full flex flex-col gap-2">
                <div>
                    <IssueStatusFilter />
                </div>
                <IssuesTable statusFilterBy={status} />
            </div>
        </div>
    );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
