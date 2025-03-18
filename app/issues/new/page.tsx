import React from "react";
import IssueForm from "../_components/IssueForm";
import RouteButton from "@/app/components/RouteButton";

const NewIssuePage = async () => {
    return (
        <div className="w-8/10 h-[800px] flex flex-col my-5 relative">
            <div className="absolute">
                <RouteButton
                    text={"Issues"}
                    route={"/issues"}
                    returnIcon
                    className="THEMED-text-sm"
                />
            </div>
            <div className="flex items-center h-full">
                <IssueForm title={"New Issue Form"} />
            </div>
        </div>
    );
};

export default NewIssuePage;
