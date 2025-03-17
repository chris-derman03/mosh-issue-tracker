import ThemedSkeleton from "@/app/components/ThemedSkeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailPage = () => {
    return (
        <div className="flex flex-col items-center gap-2 mt-25 w-[500px]">
            <div className="mb-8 flex flex-col items-center">
                <ThemedSkeleton
                    width="28rem"
                    height="1.5rem"
                    containerClassName="flex-1/2"
                    className="parp"
                />
                <ThemedSkeleton width="3rem" containerClassName="flex-1/2" />
            </div>
            <div className="flex flex-col items-center gap-0">
                <ThemedSkeleton width="18rem" />
                <ThemedSkeleton width="8rem" />
                <ThemedSkeleton width="18rem" />
                <ThemedSkeleton width="8rem" />
                <ThemedSkeleton width="18rem" />
                <ThemedSkeleton width="8rem" />
            </div>
        </div>
    );
};

export default LoadingIssueDetailPage;
