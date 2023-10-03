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
    <div className='flex flex-wrap justify-center gap-4 w-full'>
        {books?.length===0 
        ? <div className="text-2xl">No Records</div>
        :<>
            {books?.map((book:Book,idx:number)=>
            <div className='flex bg-gray-800 text-white rounded-xl m-5 shadow-xl w-[500px]' key={idx}>
                <Image src={book.Image} width={200} height={100} alt={book.Title} className="rounded-xl w-1/2"/>
                <div className="w-1/2 m-4 flex flex-col justify-between">
                    <div>
                        <p><span className="font-semibold text-red-500">Title:</span> {book.Title?.slice(0,30)}</p>
                        <p className='my-4'><span className="font-semibold text-red-500">Author:</span> {book.Author?.slice(0,30)}</p>
                        <p className='my-4'><span className="font-semibold text-red-500">Year:</span> {book.Year}</p>
                        <p className='my-4'><span className="font-semibold text-red-500">Pages:</span> {book.Pages}</p>
                        <p className='my-4'><span className="font-semibold text-red-500">Language:</span> {book.Language}</p>
                        <p className='my-4'><span className="font-semibold text-red-500">File Type:</span> {book.Extension}</p>
                        <p className='my-4'><span className="font-semibold text-red-500">Size:</span> {book.Size}</p>
                    </div>
                    <Button className="w-full hover:bg-white hover:text-black text-white bg-red-500" onClick={() => downloadFile(book)}>Download</Button>
                </div>
            </div>
            )}
        </>
        }
    </div>
  )
}

export default Books