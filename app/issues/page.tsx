import React from "react";
import RouteButton from "../components/RouteButton";
import IssuesTable from "./IssuesTable";

const IssuesPage = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="h-[100px] flex items-center">
                <RouteButton text={"New Issue"} route={"/issues/new"} />
            </div>
            <IssuesTable />
        </div>
    );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
