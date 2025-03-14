"use client";
import React, { useState } from "react";
import { TextArea, TextField, Button, Spinner } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import FormFieldError from "@/app/components/Form/FormFieldError";
import FormError from "@/app/components/Form/FormError";

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
    const [isSubmitting, setSubmitting] = useState(false);

    const onSubmit: SubmitHandler<IssueFormInput> = async (data) => {
        try {
            setSubmitting(true);
            await axios.post("/api/issues", data);
            router.push("/issues");
        } catch (error) {
            setSubmitting(false);
            setError("An unexpected error occured.");
        }
    };

    return (
        <div className="issueFormContainer w-full">
            {error && <FormError message={error} />}
            <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="formFieldContaineer">
                    <TextField.Root
                        placeholder="Title"
                        {...register("title")}
                        className="THEMED THEMED-textArea"
                    />
                    <FormFieldError message={errors.title?.message} />
                </div>

                <div className="formFieldContaineer">
                    <TextArea
                        placeholder="Description"
                        {...register("description")}
                        className="THEMED THEMED-textArea h-30"
                    />
                    <FormFieldError message={errors.description?.message} />
                </div>

                <Button
                    className="THEMED THEMED-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting && <Spinner loading />}
                    Submit New Issue
                </Button>
            </form>
        </div>
    );
};

export default IssueForm;
