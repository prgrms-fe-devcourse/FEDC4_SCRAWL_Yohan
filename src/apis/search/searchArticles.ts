import { getUser } from "@apis/user/getUser";

import { ArticleSearchResult } from "@type/apis/etc/SearchAll";
import { Article } from "@type/models/Article";

import { searchAll } from "./searchAll";

export const searchArticles = async (searchKeyword: string) => {
  const searchResults = await searchAll(searchKeyword);
  const articleSearchResults = searchResults.filter(
    (searchResult): searchResult is ArticleSearchResult =>
      "title" in searchResult
  );

  const users = await Promise.all(
    articleSearchResults.map(({ author }) => getUser(author))
  );

  return articleSearchResults.map(
    (result, i) =>
      ({
        ...result,
        author: users[i]
      }) as Article
  );
};
