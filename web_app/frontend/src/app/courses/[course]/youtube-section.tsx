"use client";
import Link from "next/link";
import { Text } from "@/components/ui/text";
import type { TYoutubeSearchResponse } from "@/types/youtube";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import type { TYoutubeSearchResult } from "@/types/youtube";
import { formatDate2 } from "@/lib/utils";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getYoutubeSearchResult = async (limit: number, title: string) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDDfkcYCLIUKmgT74UylBRKA9DB2XY6KHo&channelId=UCfOd2rdDds6rbEY0usynU6w&part=snippet,id&order=date&maxResults=${limit}&videoCaption=${title}`,
      {
        next: {
          tags: ["youtube"],
        },
      },
    );
    const data: TYoutubeSearchResponse = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default function YoutubeSection({
  title,
  limit = 10,
}: {
  title: string;
  limit?: number;
}) {
  //   const data = await getYoutubeSearchResult(limit, title);
  const { data, isPending } = useQuery({
    queryKey: ["youtube"],
    queryFn: async () => {
      try {
        const rawData = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDDfkcYCLIUKmgT74UylBRKA9DB2XY6KHo&channelId=UCfOd2rdDds6rbEY0usynU6w&part=snippet,id&order=date&maxResults=${limit}&q=${title}`,
        );
        const data: TYoutubeSearchResponse = rawData.data;
        return data;
      } catch (err) {
        // throw new Error(err);
        console.log(err);
      }
    },
    refetchInterval: 60 * 1000,
  });
  if (!data || isPending)
    return <Text variant="text-lg">No data available</Text>;

  return (
    <section className="py-8">
      <div className="container relative">
        {data?.items && data?.items.length > 0 ? (
          // long cards section
          <div className="mt-12 grid gap-4 lg:grid-cols-[410px_auto]">
            <ul
              role="article"
              className="mb-4 flex h-full flex-col justify-between gap-4 sm:flex-row lg:mb-0 lg:flex-col"
            >
              <li className="h-full w-full">
                <VideoCard variant="large" video={data.items[0]} />
              </li>
              <li className="hidden h-full w-full sm:block">
                <VideoCard variant="large" video={data.items?.[1]} />
              </li>
            </ul>
            <ul
              role="article"
              className="grid grid-cols-1 grid-rows-3 gap-4 gap-x-3 md:grid-cols-2 md:gap-x-6 lg:grid-cols-1 xl:grid-cols-2"
            >
              {data?.items?.slice(2, 5).map((video) => (
                <li
                  key={`latest-videos-right-${video.id.videoId}`}
                  className="h-full w-full"
                >
                  <VideoCard
                    variant="small"
                    key={`latest-video-${video.id.videoId}`}
                    video={video}
                  />
                </li>
              ))}
              {data.items?.slice(5, 8).map((video) => (
                <li
                  key={`latest-videos-left-${video.id.videoId}`}
                  className="hidden h-full w-full sm:block lg:hidden xl:block"
                >
                  <VideoCard
                    variant="small"
                    key={`latest-video-${video.id.videoId}`}
                    video={video}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="container mx-auto mt-12 flex justify-center">
            <Text
              className="text-center text-gray-600"
              variant="text-lg"
              medium
            >
              {"0 news found :("}
            </Text>
          </div>
        )}
      </div>
    </section>
  );
}

function VideoCard({
  variant = "small",
  video,
}: {
  variant: "large" | "small";
  video: TYoutubeSearchResult;
}) {
  const props = { video };
  const variantRenderMap = {
    small: () => <SmallYoutubeeCardVariant {...props} />,
    large: () => <LargeYoutubeVariant {...props} />,
  };
  const Card = variantRenderMap[variant];
  return <Card />;
}

function LargeYoutubeVariant({ video }: { video: TYoutubeSearchResult }) {
  const videoLink = `https://www.youtube.com/${video.id.videoId ? "watch?v=" + video.id.videoId : ""}`;
  const { title } = video.snippet;
  return (
    <article className="group flex flex-col items-start justify-center gap-2 border-b border-gray-200 pb-2 md:gap-3 lg:h-full lg:w-[400px]">
      <Link
        href={videoLink}
        className="h-full max-h-[150px] w-full self-stretch overflow-hidden rounded-lg bg-gray-200 tracking-wider"
        prefetch={false}
      >
        <Image
          src={video.snippet.thumbnails["high"].url || "/images/fallback.jpg"}
          alt={"video thumbnail of " + video.snippet.title}
          width={video.snippet.thumbnails["high"].width}
          height={video.snippet.thumbnails["high"].height}
          quality={70}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-col items-start gap-2 self-stretch md:gap-2">
        <Link
          href={videoLink}
          className="space-y-2.5 self-stretch underline-offset-1 hover:[&>h2]:underline"
          prefetch={false}
        >
          <Text
            as="h2"
            variant="text-lg"
            className="line-clamp-2 text-left text-sm leading-[1.33rem] text-gray-900 sm:text-base md:text-lg md:leading-[1.55]"
            semibold
          >
            {parse(title)}
          </Text>
        </Link>

        <div className="flex items-start gap-2 self-stretch">
          <Text
            variant="text-md"
            className="line-clamp-1 flex items-center gap-x-0.5 text-xs text-gray-500 sm:text-sm md:text-base"
          >
          </Text>
          <Text as="span" variant="text-md" className="text-gray-500 hidden" bold>
            ·
          </Text>
          <Text
            variant="text-md"
            className="line-clamp-1 text-xs text-gray-500 sm:text-sm md:text-base"
          >
            {formatDate2(video.snippet.publishTime)}
          </Text>
        </div>
      </div>
    </article>
  );
}

function SmallYoutubeeCardVariant({ video }: { video: TYoutubeSearchResult }) {
  const videoLink = `https://www.youtube.com/${video.id.videoId ? "watch?v=" + video.id.videoId : ""}`;
  const { title, description } = video.snippet;

  return (
    <article className="group mb-2 flex h-full w-full flex-row items-start gap-2 border-b border-gray-200 !pl-0 !pr-0 pb-1 md:mb-0 md:gap-4 md:pb-2">
      <Link
        className="overflow-hidden rounded-lg"
        href={videoLink}
        tabIndex={-1}
        prefetch={false}
      >
        <Image
          src={video.snippet.thumbnails["medium"].url || "/images/fallback.jpg"}
          alt={"video thumbnail of " + video.snippet.title}
          width={video.snippet.thumbnails["high"].width}
          height={video.snippet.thumbnails["high"].height}
          quality={70}
          className="aspect-video h-20 w-20 min-w-20 cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105 sm:size-16 md:h-[108px] md:w-24 lg:w-36"
        />
      </Link>

      <div className="flex h-full flex-1 flex-col justify-start gap-y-3 lg:min-w-[300px]">
        <div className="space-y-2">
          <Link
            href={videoLink}
            className="underline-offset-2 hover:underline"
            prefetch={false}
          >
            <Text
              as="h2"
              variant="text-lg"
              medium
              className="line-clamp-3 text-left text-sm leading-[1.33] tracking-tight sm:line-clamp-2 sm:h-16 sm:text-base md:text-lg md:leading-[1.55]"
              semibold
            >
              {parse(title)}
            </Text>
          </Link>
        </div>

        <div className="flex flex-col items-start gap-1 self-stretch">
          <Text
            variant="text-md"
            className="line-clamp-1 flex items-center gap-x-0.5 text-xs text-gray-700 sm:text-sm md:text-base"
          >
          </Text>
          <Text
            variant="text-md"
            className="line-clamp-1 text-xs text-gray-500 sm:text-sm md:text-base"
          >
            {formatDate2(video.snippet.publishTime)}
          </Text>
        </div>
      </div>
    </article>
  );
}
