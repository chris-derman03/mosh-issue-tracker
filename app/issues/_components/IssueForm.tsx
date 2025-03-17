"use client";
import React, { useState } from "react";
import { TextArea, TextField, Button, Spinner } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchemas";
import FormFieldError from "@/app/components/Form/FormFieldError";
import FormError from "@/app/components/Form/FormError";
import { Issue } from "@prisma/client";

type IssueFormInput = z.infer<typeof createIssueSchema>;

interface Props {
    title: string;
    issue?: Issue | null;
}

const IssueForm = ({ title, issue }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IssueFormInput>({
        resolver: zodResolver(issueSchema),
    });
    const router = useRouter();
    const [error, setError] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);

    const onSubmit: SubmitHandler<IssueFormInput> = async (data) => {
        try {
            setSubmitting(true);
            if (issue) await axios.patch(`/api/issues/${issue.id}`, data);
            else await axios.post("/api/issues", data);
            router.push("/issues");
        } catch (error) {
            setSubmitting(false);
            setError(`An unexpected error occured. ${error}`);
        }
    };

    return (
        <div className="issueFormContainer w-full">
            {error && <FormError message={error} />}
            <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <p className="THEMED THEMED-text1 mb-5">{title}</p>
                <div className="formFieldContaineer">
                    <TextField.Root
                        placeholder="Title"
                        defaultValue={issue?.title}
                        {...register("title")}
                        className="THEMED THEMED-textArea"
                        size="3"
                    />
                    <FormFieldError message={errors.title?.message} />
                </div>

                <div className="formFieldContaineer">
                    <TextArea
                        placeholder="Description"
                        defaultValue={issue?.description}
                        {...register("description")}
                        className="THEMED THEMED-textArea h-70"
                    />
                    <FormFieldError message={errors.description?.message} />
                </div>

                <Button
                    className="THEMED THEMED-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting && <Spinner loading />}
                    {issue ? "Update" : "Submit"}
                </Button>
            </form>
        </div>
    );
};

export default IssueForm;
