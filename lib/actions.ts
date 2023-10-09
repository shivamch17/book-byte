"use server"
export async function libgenScraper(title?:String) {
    try {
        const response = await fetch('https://libgen-scraper.2.us-1.fl0.io/scrape-fast?title='+title+'&limit=50');
        if(response.status === 200){
            const data=await response.json();
            return data;
        }
        else{
            console.log("Some error occurred");
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getDownloadLinks(url?:String) {
    try {
        const response = await fetch('https://libgen-scraper.2.us-1.fl0.io/get-link?url='+url);
        if(response.status === 200){
            const data=await response.json();
            return data;
        }
        else{
            console.log("Some error occurred");
        }
    } catch (error) {
        console.error(error);
    }
}
