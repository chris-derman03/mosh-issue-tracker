import React from "react";
import IssueForm from "./IssueForm";
import RouteButton from "@/app/components/RouteButton";

const NewIssuePage = () => {
    return (
        <main className="w-8/10 flex flex-col">
            <div className="mb-15">
                <RouteButton
                    text={"Issues"}
                    route={"/issues"}
                    returnIcon
                    className="THEMED-text-sm"
                />
            </div>
            <IssueForm />
        </main>
    );
};

export default NewIssuePage;
