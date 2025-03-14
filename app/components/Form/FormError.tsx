import React from "react";
import { Callout } from "@radix-ui/themes";
import { BiCommentError } from "react-icons/bi";

interface Props {
    message: string | undefined;
}

const FormError = ({ message }: Props) => {
    return (
        <Callout.Root color="violet" className="mb-5">
            <Callout.Icon>
                <BiCommentError />
            </Callout.Icon>
            <Callout.Text>{message}</Callout.Text>
        </Callout.Root>
    );
};

export default FormError;
