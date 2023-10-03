export type Book = {
    ID?: string;
    Title: string;
    Link?: string;
    Author?: string;
    Publisher?: string;
    Year?: string;
    Pages?: string;
    Language?: string;
    Size?: string;
    Extension?: string;
    Mirror1?: string;
    Mirror2: string;
    DownloadLinks: string[];
    Image: string;
}

export type SearchBarProps = {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    searchValue: string;
    setBooks: (books: Book[]) => void;
    fetching: boolean;
    setFetching: React.Dispatch<React.SetStateAction<boolean>>;
};