import React from "react";
import IssueForm from "./IssueForm";
import RouteButton from "@/app/components/RouteButton";

const NewIssuePage = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="mb-15">
                <RouteButton text={"Issues"} route={"/issues"} returnIcon />
            </div>
            <IssueForm />
        </div>
    );
};

export default NewIssuePage;
