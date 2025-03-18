import Pagination from "./components/Pagination";

interface Params {
    searchParams: Promise<{ page: string }>;
}

export default async function Home({ searchParams }: Params) {
    let { page } = await searchParams;

    return (
        <div>
            <h1 className="text-5xl">Hello World</h1>
            <Pagination
                itemCount={100}
                pageSize={10}
                currentPage={parseInt(page)}
            />
        </div>
    );
}
