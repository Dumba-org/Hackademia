"use client";

import { getSingleCourse } from "@/server/courses/get-single-course";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function CourseCard({ id }: { id: string }) {
  console.log(id);
  const { data, isPending } = useQuery({
    queryKey: ["courses", id],
    queryFn: async () => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/${id}?populate=*`,
        );
        return data.data;
      } catch (error) {
        console.error("Error fetching", error);
      }
    },
    refetchInterval: 60 * 1000,
  });
  console.log(data);
  return (
    <div>
      {!data || isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="flex w-full items-center justify-between border border-gray-200 px-4 py-2">
          <Link href={`/courses/${data?.data.documentId}`}>
            {data?.data?.name}
          </Link>
          {data?.data?.pdf?.map((pdf: any) => (
            <Button key={pdf.documentId} className="">
              <Link
                target="_blank"
                href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/${pdf.url}`}
                className="flex items-center gap-x-2"
              >
                Get pdf <Download size={18} />
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
