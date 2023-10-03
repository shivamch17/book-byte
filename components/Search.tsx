"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react';
import { libgenScraper } from "@/lib/actions";
import { SearchBarProps } from "@/types";

export function SearchBar({setSearchValue, searchValue, setBooks,fetching, setFetching}:SearchBarProps ) {
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setFetching(true);
        const results = await libgenScraper(searchValue);
        setBooks(results);
        setFetching(false);
    };
    return (
        <form className="flex w-full space-x-2" onSubmit={handleSubmit}>
            <Input
                type="text"
                className="md:min-w-[500px] sm:w-auto"
                placeholder="Enter the title of the book.."
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button type="submit" disabled={fetching}>Search</Button>
        </form>
    )
}
