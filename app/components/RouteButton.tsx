"use client";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import dynamic from "next/dynamic";
const IoMdReturnLeft = dynamic(() =>
    import("react-icons/io").then((mod) => mod.IoMdReturnLeft)
);
const FaRegEdit = dynamic(() =>
    import("react-icons/fa").then((mod) => mod.FaRegEdit)
);

interface Props {
    text: string;
    route: string;
    returnIcon?: boolean;
    editIcon?: boolean;
    className?: string;
    forceDisable?: boolean;
}

const RouteButton = ({
    text,
    route,
    returnIcon = false,
    editIcon = false,
    className,
    forceDisable = false,
}: Props) => {
    const router = useRouter();
    const [isClicked, setClicked] = useState(false);

    return (
        <Button
            disabled={isClicked || forceDisable}
            onClick={() => {
                setClicked(true);
                router.push(route);
            }}
            className={"THEMED THEMED-button " + className}
        >
            {returnIcon && <IoMdReturnLeft size={18} />}
            {editIcon && <FaRegEdit size={18} className="mb-0.5" />}
            {text}
        </Button>
    );
};

export default RouteButton;
