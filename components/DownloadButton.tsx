import React, { useState } from "react";
import { Button } from "./ui/button";
import { getDownloadLinks } from "@/lib/actions";
import { BookT } from "@/types";

interface Props {
  book: BookT
}

export default function DownloadButton({ book }: Props) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    const links = await getDownloadLinks(book.Mirror1);
    function tryDownload(index: number) {
      if (index >= links?.length) {
        console.error("Failed to download file from all URLs");
        setDownloading(false);
        return;
      }
      fetch(links[index])
        .then((response) => {
          if (response.ok) {
            console.log("Started downloading");
            return response.blob();
          } else {
            tryDownload(index + 1);
          }
        })
        .then((blob) => {
          if (blob) {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            const filename = links[index].split("/").slice(-1)[0];
            const fileExtension = filename.split(".").slice(-1)[0];
            a.download = (book.Title || "downloadedBook") + "." + fileExtension;
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            setDownloading(false);
          }
        })
        .catch((error) => {
          tryDownload(index + 1);
          console.error("Error downloading file:", error);
        });
    }

    tryDownload(0);
  };

  return (
    <Button
      variant={"bookDownload"}
      onClick={handleDownload}
    >
      {downloading ? (
        <div className="col-3">
          <div className="snippet" data-title="dot-windmill">
            <div className="stage">
              <div className="dot-windmill"></div>
            </div>
          </div>
        </div>
      ) : (
        "Download"
      )}
    </Button>
  );
}
