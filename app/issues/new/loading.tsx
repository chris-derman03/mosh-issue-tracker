import RouteButton from "@/app/components/RouteButton";
import ThemedSkeleton from "@/app/components/ThemedSkeleton";
import React from "react";

const LoadingNewIssuePage = () => {
    return (
        <div className="w-7/10 flex flex-col my-5 relative">
            <div className="absolute">
                <RouteButton
                    text={"Issues"}
                    route={"/issues"}
                    returnIcon
                    className="THEMED-text-sm"
                    forceDisable
                />
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full gap-12">
                <div className="w-full">
                    <ThemedSkeleton height="2rem" containerClassName="flex-1" />
                </div>
                <div className="w-full">
                    <ThemedSkeleton
                        height="15rem"
                        containerClassName="flex-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingNewIssuePage;
