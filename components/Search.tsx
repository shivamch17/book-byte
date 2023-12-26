"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar() {
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push('/search/' + encodeURIComponent(searchValue))
    };

    return (
        <form className="flex w-full space-x-2" onSubmit={handleSubmit}>
            <Input
                type="text"
                className="md:min-w-[600px] lg:min-w-[700px] sm:min-w-[450px] max-sm:min-w-[250px]"
                placeholder="Enter the title of the book.."
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button type="submit">Search</Button>
        </form>
    )
}
