"use client";
import { useState } from "react";
import { AlertDialog, Button } from "@radix-ui/themes";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteIssueButton = ({ issueId }: { issueId: string }) => {
    const [isClicked, setClicked] = useState(false);

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button
                    disabled={isClicked}
                    onClick={() => {
                        setClicked(true);
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
                            onClick={() => {
                                setClicked(false);
                            }}
                        >
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button
                            className="THEMED-button"
                            onClick={() => {
                                setClicked(false);
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
