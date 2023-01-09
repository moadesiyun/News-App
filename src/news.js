const hls_url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=21952ecfd84743699fdb05835cb25377";

export async function retrieveNews() {

    let output = await fetch(hls_url).then(response => response.json());

    return output.articles;
}