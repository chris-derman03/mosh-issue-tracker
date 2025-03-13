import React from "react";
import { TextArea, TextField, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
    return (
        <div className="w-3/4 flex flex-col gap-5">
            <TextField.Root placeholder="Title" className="customizedRadix" />
            <TextArea placeholder="Description" className="customizedRadix" />
            <Button className="customizedRadix">Submit New Issue</Button>
        </div>
    );
};

export default NewIssuePage;
