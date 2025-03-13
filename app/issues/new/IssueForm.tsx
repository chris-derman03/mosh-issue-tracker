"use client";
import React from "react";
import { TextArea, TextField, Button } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

type IssueFormInput = {
    title: string;
    description: string;
};

const IssueForm = () => {
    const { register, handleSubmit } = useForm<IssueFormInput>();
    const router = useRouter();

    const onSubmit: SubmitHandler<IssueFormInput> = async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
    };

    return (
        <form
            className="w-3/4 flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField.Root
                placeholder="Title"
                {...register("title")}
                className="customizedRadix"
            />
            <TextArea
                placeholder="Description"
                {...register("description")}
                className="customizedRadix"
            />
            <Button className="customizedRadix">Submit New Issue</Button>
        </form>
    );
};

export default IssueForm;
