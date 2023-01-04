const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchData = (section) => {
   return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`)
   .then((response) => {
    if (!response.ok) {
        throw new Error(`Uh-oh! HTTP error. Status code:${response.status}`)
    } else {
        return response.json();
    }
   })
   .catch((err) => {
    console.log(err.message)
   })
}