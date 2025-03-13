import React from "react";
import { ProgressProps, Text } from "@radix-ui/themes";

interface Props {
    message: string | undefined;
}

const FormFieldError = ({ message }: Props) => {
    if (!message) return null;

    return (
        <Text color="violet" size="1">
            {message}
        </Text>
    );
};

export default FormFieldError;
