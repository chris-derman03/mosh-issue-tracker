"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const UserProfile = () => {
    const { status, data: session } = useSession();

    return (
        <div>
            {status === "authenticated" && (
                <Link href="/api/auth/signout">Sign out</Link>
            )}
            {status === "unauthenticated" && (
                <Link href="/api/auth/signin">Log in</Link>
            )}
        </div>
    );
};

export default UserProfile;
