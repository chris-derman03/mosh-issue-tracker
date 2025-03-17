import React from "react";
import IssueForm from "./IssueForm";
import RouteButton from "@/app/components/RouteButton";
import delay from "delay";

const NewIssuePage = async () => {
    await delay(2000);

    return (
        <div className="w-7/10 flex flex-col my-5 relative">
            <div className="absolute">
                <RouteButton
                    text={"Issues"}
                    route={"/issues"}
                    returnIcon
                    className="THEMED-text-sm"
                />
            </div>
            <div className="flex items-center h-full">
                <IssueForm />
            </div>
        </div>
    );
};

export default NewIssuePage;
