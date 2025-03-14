import React from "react";
import { Text } from "@radix-ui/themes";

interface Props {
    message: string | undefined;
}

const FormFieldError = ({ message }: Props) => {
    if (!message) return null;

    return <Text className="THEMED THEMED-text4">{message}</Text>;
};

export default FormFieldError;
