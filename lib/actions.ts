"use server"
export async function libgenScraper(title?:String) {
    try {
        const response = await fetch('https://libgen-scraper.onrender.com/scrape?title='+title+'&limit=10');
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
