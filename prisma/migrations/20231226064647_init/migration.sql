-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "ID" TEXT NOT NULL,
    "Title" TEXT,
    "Link" TEXT,
    "Author" TEXT,
    "Publisher" TEXT,
    "Year" TEXT,
    "Pages" TEXT,
    "Language" TEXT,
    "Size" TEXT,
    "Extension" TEXT,
    "Mirror1" TEXT,
    "Mirror2" TEXT,
    "Image" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_ID_key" ON "Book"("ID");
