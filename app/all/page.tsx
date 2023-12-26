"use client"
import Books from "@/components/Books";
import { SkeletonDemo } from "@/components/SkeletonDemo";
import { getAllBooks } from "@/lib/actions";
import { BookT } from "@/types";
import { useEffect, useState } from "react"

export default function Page() {
    const [books, setBooks] = useState<any>([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllBooks();
            setBooks(data);
            setFetching(false);
        }
        fetchData()
    }, [])

    return (
        <div className="mt-10">
            {fetching ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:px-6 gap-6 mb-8 w-full px-2">
                    {Array.from({ length: 50 }).map((_, idx) => (
                        <SkeletonDemo key={idx} />
                    ))}
                </div>
            ) : (
                <Books books={books} />
            )}
        </div>
    )
}