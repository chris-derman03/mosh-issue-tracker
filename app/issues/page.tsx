import React from "react";
import RouteButton from "../components/RouteButton";
import IssuesTable from "./IssuesTable";
import IssueStatusFilter from "./IssueStatusFilter";
import { Issue, Status } from "@prisma/client";

interface Params {
    searchParams: Promise<{ status: Status; orderBy: keyof Issue }>;
}

const IssuesPage = async ({ searchParams }: Params) => {
    const { status, orderBy } = await searchParams;

    return (
        <div className="w-full flex flex-col items-center">
            <div className="h-[100px] flex items-center">
                <RouteButton text={"New Issue"} route={"/issues/new"} />
            </div>
            <div className="w-full flex flex-col gap-2">
                <div>
                    <IssueStatusFilter />
                </div>
                <IssuesTable URLStatusFilter={status} URLSortOrder={orderBy} />
            </div>
        </div>
    );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
