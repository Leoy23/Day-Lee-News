import nyt from "../../src/assets/nytimes.jpg";

export const cleanData = (data) => {
  const formattedData = data.results.map((newData) => {
      const defaultImage = newData.multimedia !== null
        ? {
            url: newData.multimedia[0].url,
            copyright: "New York Times"
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
            published: newData.published_date,
            location: newData.geo_facets,
            img: defaultImage,
            url: newData.short_url,
          }

  })
  return formattedData;

};
