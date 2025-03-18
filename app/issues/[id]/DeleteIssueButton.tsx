"use client";
import { useState } from "react";
import { AlertDialog, Button, Spinner } from "@radix-ui/themes";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaCircleExclamation } from "react-icons/fa6";

const DeleteIssueButton = ({ issueId }: { issueId: string }) => {
    const [isDialog, setDialog] = useState(false);
    const [isDeleting, setDeleting] = useState(false);
    const [isRootClicked, setRootClicked] = useState(false);
    const [isDialogClicked, setDialogClicked] = useState(false);
    const [deletionError, setDeletionError] = useState(false);
    const router = useRouter();

    return (
        <>
            <AlertDialog.Root open={isDialog}>
                <AlertDialog.Trigger>
                    <Button
                        disabled={isRootClicked}
                        onClick={() => {
                            setRootClicked(true);
                            setDialogClicked(false);
                            setDialog(true);
                        }}
                        className="THEMED THEMED-button"
                    >
                        <FaRegTrashAlt size={18} />
                    </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content>
                    <AlertDialog.Title className="THEMED-text6 flex items-center">
                        <FaCircleExclamation className="mr-2" />
                        {"Confirm Deletion"}
                    </AlertDialog.Title>
                    <AlertDialog.Description>
                        Do you really want to permanently delete this issue?
                    </AlertDialog.Description>
                    <div className="flex gap-3 mt-4">
                        <AlertDialog.Cancel>
                            <Button
                                className="THEMED-button-cancel"
                                disabled={isDialogClicked}
                                onClick={() => {
                                    setRootClicked(false);
                                    setDialogClicked(true);
                                    setDialog(false);
                                }}
                            >
                                Cancel
                            </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <Button
                                className="THEMED-button"
                                disabled={isDialogClicked}
                                onClick={async () => {
                                    setRootClicked(false);
                                    setDialogClicked(true);
                                    try {
                                        setDeleting(true);
                                        await axios.delete(
                                            `/api/issues/${issueId}`
                                        );
                                        router.push("/issues");
                                        router.refresh();
                                    } catch (error) {
                                        setDeletionError(true);
                                        setDialogClicked(false);
                                        setDialog(false);
                                        setDeleting(false);
                                    }
                                    setDialog(false);
                                    setDeleting(false);
                                }}
                            >
                                {isDeleting && <Spinner loading />}
                                {"Delete"}
                            </Button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Root>

            <AlertDialog.Root open={deletionError}>
                <AlertDialog.Content>
                    <AlertDialog.Title className="THEMED-text6">
                        Deletion Failed.
                    </AlertDialog.Title>
                    <AlertDialog.Description>
                        This issue could not be deleted. Please try again later.
                    </AlertDialog.Description>
                    <div className="mt-4">
                        <AlertDialog.Cancel>
                            <Button
                                className="THEMED-button-cancel"
                                disabled={isDialogClicked}
                                onClick={() => {
                                    setRootClicked(false);
                                    setDialogClicked(true);
                                    setDeletionError(false);
                                }}
                            >
                                OK
                            </Button>
                        </AlertDialog.Cancel>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    );
};

export default DeleteIssueButton;
