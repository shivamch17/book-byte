'use client'
import Books from "@/components/Books";
import { SearchBar } from "@/components/Search";
import { SkeletonDemo } from "@/components/SkeletonDemo";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [books, setBooks] = useState();    
  const [fetching, setFetching] = useState(false);
  return (
    <main className="flex w-full items-center flex-col gap-4">
      <section className="mt-24">
        <p className="text-[72px] font-semibold">Haasle free book search with <span className="text-red-500">Book Byte</span></p>
      </section>
      <section className="mt-12">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setBooks={setBooks} fetching={fetching} setFetching={setFetching}/>
      </section>
      <section className="mt-12">
      {fetching ? (
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {Array.from({ length: 10 }).map((_, idx) => (
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
