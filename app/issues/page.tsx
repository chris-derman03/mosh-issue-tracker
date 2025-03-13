import React from "react";
import RouteButton from "../components/RouteButton";
import IssuesTable from "./IssuesTable";

const IssuesPage = () => {
    return (
        <div className="w-full flex flex-col gap-10 items-center">
            <RouteButton text={"New Issue"} route={"/issues/new"} />
            <IssuesTable />
        </div>
    );
};

export default IssuesPage;
