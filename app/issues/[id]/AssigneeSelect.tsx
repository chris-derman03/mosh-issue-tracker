"use client";
import { Issue, User } from "@prisma/client";
import { Select, Spinner } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
    // Query Users
    const { data: users, error, isLoading } = useUsers();

    if (isLoading) return <Spinner />;
    if (error) return null;

    // API call to assign user to this issue.
    const assignUser = (userId: string) => {
        axios
            .patch(`/api/issues/${issue.id}`, {
                assignedToUserId: userId === "-1" ? null : userId,
            })
            .catch(() => {
                toast.error("Could not assign user.");
            });
    };

    return (
        <>
            <Select.Root
                defaultValue={issue.assignedToUserId || "-1"}
                onValueChange={assignUser}
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

// Custom hook to fetch users
const useUsers = () =>
    useQuery<User[]>({
        queryKey: ["users"],
        queryFn: () =>
            axios.get("/api/users").then((response) => response.data),
        staleTime: 12 * 60 * 3600 * 1000, // 12 Hours
        retry: 3,
    });

export default AssigneeSelect;
