"use client";
import { Button } from "@radix-ui/themes";

import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
const MdKeyboardDoubleArrowLeft = dynamic(() =>
    import("react-icons/md").then((mod) => mod.MdKeyboardDoubleArrowLeft)
);
const MdKeyboardDoubleArrowRight = dynamic(() =>
    import("react-icons/md").then((mod) => mod.MdKeyboardDoubleArrowRight)
);
const MdKeyboardArrowLeft = dynamic(() =>
    import("react-icons/md").then((mod) => mod.MdKeyboardArrowLeft)
);
const MdKeyboardArrowRight = dynamic(() =>
    import("react-icons/md").then((mod) => mod.MdKeyboardArrowRight)
);

interface Params {
    itemCount: number;
    pageSize: number;
    currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Params) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount <= 1) return null;

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        router.push("?" + params.toString());
    };

    return (
        <div className="flex items-center gap-2">
            <Button
                className="THEMED-button"
                disabled={currentPage === 1}
                onClick={() => changePage(1)}
            >
                <MdKeyboardDoubleArrowLeft size={20} />
            </Button>
            <Button
                className="THEMED-button"
                disabled={currentPage === 1}
                onClick={() => changePage(currentPage - 1)}
            >
                <MdKeyboardArrowLeft size={20} />
            </Button>
            <Button
                className="THEMED-button"
                disabled={currentPage === pageCount}
                onClick={() => changePage(currentPage + 1)}
            >
                <MdKeyboardArrowRight size={20} />
            </Button>
            <Button
                className="THEMED-button"
                disabled={currentPage === pageCount}
                onClick={() => changePage(pageCount)}
            >
                <MdKeyboardDoubleArrowRight size={20} />
            </Button>
            <p>
                Page {currentPage} of {pageCount}
            </p>
        </div>
    );
};

export default Pagination;
