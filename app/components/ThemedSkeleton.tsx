import React from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const skC1 = "#314158";
const skC2 = "#ff8904";

const ThemedSkeleton: React.FC<SkeletonProps> = (props) => {
    return <Skeleton baseColor={skC1} highlightColor={skC2} {...props} />;
};

export default ThemedSkeleton;
