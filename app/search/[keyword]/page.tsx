"use client"
import Books from "@/components/Books";
import { SkeletonDemo } from "@/components/SkeletonDemo";
import { libgenScraper } from "@/lib/actions";
import { BookT } from "@/types";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { keyword: string } }) {
    const [books, setBooks] = useState<BookT[]>([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const results = await libgenScraper(decodeURIComponent(params.keyword));
            setBooks(results);
            setFetching(false);
        }
        fetchData();
    }, [])

    return (
        <section className="mt-8">
            <div className="text-3xl font-semibold text-center my-6 bg-red-500 mx-6 rounded-xl shadow-xl p-2">Search results for {decodeURIComponent(params.keyword)}</div>
            {fetching ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:px-6 gap-6 mb-8 w-full px-2">
                    {Array.from({ length: 25 }).map((_, idx) => (
                        <SkeletonDemo key={idx} />
                    ))}
                </div>
            ) : (
                <Books books={books} />
            )}
        </section>
    )
}