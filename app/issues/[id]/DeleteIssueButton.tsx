"use client";
import { useState } from "react";
import { AlertDialog, Button } from "@radix-ui/themes";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({ issueId }: { issueId: string }) => {
    const [isRootClicked, setRootClicked] = useState(false);
    const [isDialogClicked, setDialogClicked] = useState(false);
    const router = useRouter();

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button
                    disabled={isRootClicked}
                    onClick={() => {
                        setRootClicked(true);
                        setDialogClicked(false);
                    }}
                    className="THEMED THEMED-button"
                >
                    <FaRegTrashAlt size={18} />
                </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
                <AlertDialog.Title className="THEMED-text6">
                    Confirm Deletion
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
                                await axios.delete(`/api/issues/${issueId}`);
                                router.push("/issues");
                                router.refresh();
                            }}
                        >
                            Delete
                        </Button>
                    </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
};

export default DeleteIssueButton;
