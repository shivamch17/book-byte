import { Book } from "@/types"
import { Button } from "./ui/button"
import Image from "next/image"

function downloadFile(book:Book) {
  function tryDownload(index:number) {
    if (index >=4) {
      console.error('Failed to download file from all URLs');
      return;
    }
    fetch(book.DownloadLinks[index])
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
        //   console.error(`Failed to download file from ${book[index]}`);
          tryDownload(index + 1);
        }
      })
      .then((blob) => {
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = book.Title || 'downloadedBook';
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }
      })
      .catch((error) => {
        tryDownload(index + 1);
        // console.error('Error downloading file:', error);
      });
  }
  tryDownload(0);
}

type BooksProps = {
  books: Book[];
};

const Books = ({books}:BooksProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:px-6 gap-6 mb-8 w-full px-2'>
      {books?.length === 0 ? (
        <div className="text-2xl col-span-full">No Records</div>
      ) : (
        <>
          {books?.map((book: Book, idx: number) => (
            <div
              className='flex bg-gray-800 text-white rounded-xl shadow-xl '
              key={idx}
            >
             <div className="relative w-1/2 m-1.5 max-sm:min-w-[180px] min-w-[220px]">
                <Image
                  src={book.Image}
                  layout="fill"
                  alt={book.Title}
                  quality={10}
                  className="rounded-xl"
                  priority
                />
                <div className="flex justify-between w-full absolute bottom-1 px-1 sm:hidden">
                  <p className="text-white bg-gray-800 rounded-md text-md px-1">
                    {book.Size}
                  </p>
                  <p className="text-white bg-gray-800 rounded-md text-md px-1">
                    {book.Extension}
                  </p>
                </div>
              </div>
              <div className="w-1/2 m-3 ml-2 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <p>
                    <span className="font-semibold text-red-500">Title:</span>{' '}
                    {book.Title?.slice(0, 30)}
                  </p>
                  <p>
                    <span className="font-semibold text-red-500">Author:</span>{' '}
                    {book.Author?.slice(0, 30)}
                  </p>
                  <p>
                    <span className="font-semibold text-red-500">Year:</span>{' '}
                    {book.Year}
                  </p>
                  <p>
                    <span className="font-semibold text-red-500">Pages:</span>{' '}
                    {book.Pages}
                  </p>
                  <p>
                    <span className="font-semibold text-red-500">Language:</span>{' '}
                    {book.Language}
                  </p>
                  <p className="max-sm:hidden">
                    <span className="font-semibold text-red-500">File Type:</span>{' '}
                    {book.Extension}
                  </p>
                  <p className="max-sm:hidden">
                    <span className="font-semibold text-red-500">Size:</span>{' '}
                    {book.Size}
                  </p>
                </div>
                <Button
                  className="w-full mt-4 hover:bg-white hover:text-black text-white bg-red-500"
                  onClick={() => downloadFile(book)}
                >
                  Download
                </Button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );  
}

export default Books