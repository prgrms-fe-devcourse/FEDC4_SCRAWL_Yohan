import { getChannels } from "@apis/channel/getChannels";
import { getUser } from "@apis/user/getUser";

import { ArticleSearchResult } from "@type/apis/etc/SearchAll";
import { Article } from "@type/models/Article";

import { searchAll } from "./searchAll";

export const searchArticles = async (searchKeyword: string) => {
  const [searchResults, channels] = await Promise.all([
    searchAll(searchKeyword),
    getChannels()
  ]);
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
        author: users[i],
        channel: channels.find((channel) => channel._id === result.channel)
      }) as Article
  );
};
