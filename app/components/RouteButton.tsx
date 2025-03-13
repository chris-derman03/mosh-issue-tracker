"use client";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import dynamic from "next/dynamic";
const IoMdReturnLeft = dynamic(() =>
    import("react-icons/io").then((mod) => mod.IoMdReturnLeft)
);

interface Props {
    text: string;
    route: string;
    returnIcon?: boolean;
}

const RouteButton = ({ text, route, returnIcon = false }: Props) => {
    const router = useRouter();
    const [isClicked, setClicked] = useState(false);

    return (
        <Button
            disabled={isClicked}
            onClick={() => {
                setClicked(true);
                router.push(route);
            }}
        >
            {returnIcon && <IoMdReturnLeft size={18} />}
            {text}
        </Button>
    );
};

export default RouteButton;
