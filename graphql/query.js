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
      }
    }
  }
  
`;
