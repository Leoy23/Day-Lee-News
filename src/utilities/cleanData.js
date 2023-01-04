import nyt from "../../assets/nytimes.jpg";

export const cleanData = (data) => {
  const defaultImage = data.multimedia
    ? {
        url: data.multimedia[0].url,
        copyright: data.multimedia[0].url,
      }
    : {
        url: nyt,
        copyright: data.multimedia[0].copyright,
      };

  return {
    section: data.section,
    title: data.title,
    abstract: data.abstract,
    byline: data.byline,
    published: data.published_date,
    location: data.geo_facets,
    img: defaultImage,
    url: data.short_url,
  };
};
