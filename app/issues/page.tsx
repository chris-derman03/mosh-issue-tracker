import React from "react";
import RouteButton from "../components/RouteButton";

const IssuesPage = () => {
    return (
        <div>
            <RouteButton text={"New Issue"} route={"/issues/new"} />
        </div>
    );
};

export default IssuesPage;
