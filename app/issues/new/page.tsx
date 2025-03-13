import React from "react";
import { TextArea, TextField, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
    return (
        <div className="max-w-xl flex flex-col gap-5">
            <TextField.Root placeholder="Title" />
            <TextArea placeholder="Description" />
            <Button>Submit New Issue</Button>
        </div>
    );
};

export default NewIssuePage;
