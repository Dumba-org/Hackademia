import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { Text } from "@/components/ui/text";
import { getSingleSemester } from "@/server/packages/get-single-semester";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import SemTabs from "./sem-tabs";

export default async function SemesterSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getSingleSemester(params.slug);
  if (!data) {
    return (
      <section className="text-poppins container">No data available</section>
    );
  }
  return (
    <section className="text-poppins container space-y-8">
      <Link
        href="/semesters"
        className="flex w-fit items-center gap-x-2 rounded-sm px-4 py-2 transition-all ease-in hover:bg-gray-200"
      >
        <ChevronLeft size={18} />
        Back
      </Link>
      <div className="space-y-4">
        <Callout variant="neutral" title="Semester" className="">
          <Text variant="display-sm" semibold className="h-fit overflow-hidden">
            {data.Name}
          </Text>
        </Callout>
        <SemTabs courses={data.courses} />
      </div>
    </section>
  );
}
