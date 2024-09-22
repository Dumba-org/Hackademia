export type TYoutubeSearchResponse = {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: TYoutubeSearchResult[];
};

type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

export type TYoutubeSearchResult = {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: Snippet;
};

type VideoId = {
  kind: string;
  videoId?: string; // It can be other types like playlists, etc.
};

type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
};

type Thumbnails = {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
};

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
