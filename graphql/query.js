//Our one and only query that will gather all of the information that we will need
export const FETCH_NEWS_QUERY = `
  {
    getNews {
      news {
          type
          url
          headline
          published
          tease
          summary
          preview
          label
          id
          images {
            url
            headline
            id
            caption
          }
      }
    }
  }
  
`;
