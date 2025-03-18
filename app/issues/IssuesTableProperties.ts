import { Issue } from "@prisma/client";

const columns: {
    label: string;
    value: keyof Issue;
    className?: string;
    sortIcon: string;
}[] = [
    {
        label: "Issue",
        value: "title",
        className: "THEMED THEMED-text-md",
        sortIcon: "",
    },
    {
        label: "Status",
        value: "status",
        className: "hidden md:table-cell THEMED THEMED-text-md",
        sortIcon: "",
    },
    {
        label: "Created",
        value: "createdAt",
        className: "hidden md:table-cell THEMED THEMED-text-md",
        sortIcon: ":Oldest",
    },
];

export default columns;