'use client'
import Books from "@/components/Books";
import { SearchBar } from "@/components/Search";
import { SkeletonDemo } from "@/components/SkeletonDemo";
import { useState } from "react";
import { Book } from "@/types";

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [fetching, setFetching] = useState(false);
  return (
    <main className="flex w-full items-center flex-col gap-4 ">
      <section className="mt-24 max-sm:mt-12">
        <p className="text-[72px] max-sm:text-[48px] font-semibold text-center">Hassle free book search with <span className="text-red-500">Book Byte</span></p>
      </section>
      <section className="mt-12">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setBooks={setBooks} fetching={fetching} setFetching={setFetching}/>
      </section>
      <section className="mt-12">
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
    </main>
  )
}
