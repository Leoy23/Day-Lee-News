import nyt from "../../src/assets/nytimes.jpg";

export const cleanData = (data) => {
  const formattedData = data.results.map((newData) => {
      const defaultImage = newData.multimedia !== null
        ? {
            url: newData.multimedia[0].url,
            copyright: newData.multimedia[0].copyright
          }
        : {
            url: nyt,
            copyright: "New York Times"
          };

        return {
            section: newData.section,
            title: newData.title,
            abstract: newData.abstract,
            byline: newData.byline,
            published: new Date(newData.published_date).toDateString(),
            img: defaultImage,
            url: newData.short_url,
          }

  })
  return formattedData;

};
