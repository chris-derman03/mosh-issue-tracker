"use client";
import { Avatar, DropdownMenu, Spinner } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";

const UserProfile = () => {
    const { status, data: session } = useSession();

    if (status === "loading") return <Spinner />;

    if (status === "unauthenticated")
        return (
            <Link href="/api/auth/signin" className="THEMED-text2">
                Login
            </Link>
        );

    return (
        <div>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <div>
                        <Avatar
                            src={session!.user!.image!}
                            fallback={session!.user!.name![0]}
                            size="2"
                            radius="full"
                            className="cursor-pointer"
                        />
                    </div>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Label>
                        {session!.user!.email}
                    </DropdownMenu.Label>
                    <DropdownMenu.Item>
                        <Link href="/api/auth/signout">Sign out</Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    );
};

export default UserProfile;
