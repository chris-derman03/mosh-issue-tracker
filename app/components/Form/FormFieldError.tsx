import React from "react";
import { Text } from "@radix-ui/themes";

interface Props {
    message: string | undefined;
}

const FormFieldError = ({ message }: Props) => {
    return (
        <div className="h-10 w-full">
            {message ? (
                <Text className="THEMED THEMED-text4">{message}</Text>
            ) : null}
        </div>
    );
};

export default FormFieldError;
