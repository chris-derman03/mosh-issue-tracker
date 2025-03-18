"use client";
import { Issue, User } from "@prisma/client";
import { Select, Spinner } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
    // Query users
    const {
        data: users,
        error,
        isLoading,
    } = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: () =>
            axios.get("/api/users").then((response) => response.data),
        staleTime: 60 * 1000, // 60s
        retry: 3,
    });

    if (isLoading) return <Spinner />;

    if (error) return null;

    return (
        <>
            <Select.Root
                defaultValue={issue.assignedToUserId || "-1"}
                onValueChange={(userId) => {
                    axios
                        .patch(`/api/issues/${issue.id}`, {
                            assignedToUserId: userId === "-1" ? null : userId,
                        })
                        .catch(() => {
                            toast.error("Could not assign user.");
                        });
                }}
            >
                <Select.Trigger placeholder="Assign..." />
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Assigned User</Select.Label>
                        <Select.Separator />
                        <Select.Item value="-1">Unassigned</Select.Item>
                        <Select.Separator />
                        {users?.map((user) => (
                            <Select.Item key={user.id} value={user.id}>
                                {user.name}
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Content>
            </Select.Root>

            <Toaster />
        </>
    );
};

export default AssigneeSelect;
