"use client";
import React, { useState } from "react";
import { TextArea, TextField, Button, Callout, Text } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BiCommentError } from "react-icons/bi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import FormFieldError from "@/app/components/FormFieldError";

type IssueFormInput = z.infer<typeof createIssueSchema>;

const IssueForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IssueFormInput>({
        resolver: zodResolver(createIssueSchema),
    });
    const router = useRouter();
    const [error, setError] = useState("");

    const onSubmit: SubmitHandler<IssueFormInput> = async (data) => {
        try {
            await axios.post("/api/issues", data);
            router.push("/issues");
        } catch (error) {
            setError("An unexpected error occured.");
        }
    };

    return (
        <div className="issueFormContainer w-full">
            {error && (
                <Callout.Root color="violet" className="mb-5">
                    <Callout.Icon>
                        <BiCommentError />
                    </Callout.Icon>
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}
            <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="formFieldContaineer">
                    <TextField.Root
                        placeholder="Title"
                        {...register("title")}
                        className="customizedRadix"
                    />
                    <FormFieldError message={errors.title?.message} />
                </div>

                <div className="formFieldContaineer">
                    <TextArea
                        placeholder="Description"
                        {...register("description")}
                        className="customizedRadix"
                    />
                    <FormFieldError message={errors.description?.message} />
                </div>

                <Button className="customizedRadix">Submit New Issue</Button>
            </form>
        </div>
    );
};

export default IssueForm;
