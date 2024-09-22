import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { Text } from "@/components/ui/text";
import { getSingleSemester } from "@/server/packages/get-single-semester";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import SemTabs from "./course-tabs";
import { getSingleCourse } from "@/server/courses/get-single-course";

export default async function SemesterSlugPage({
  params,
}: {
  params: { course: string };
}) {
    
  const data = await getSingleCourse(params.course);
  if (!data) {
    return (
      <section className="text-poppins container">No data available</section>
    );
  }
  console.log(data);
  return (
    <section className="text-poppins container space-y-8">
      <Link
        href="/courses"
        className="flex w-fit items-center gap-x-2 rounded-sm px-4 py-2 transition-all ease-in hover:bg-gray-200"
      >
        <ChevronLeft size={18} />
        Back
      </Link>
      <div className="space-y-4">
        <Callout variant="neutral" title="Course" className="">
          <Text variant="display-sm" semibold className="h-fit overflow-hidden">
            {data.name}
          </Text>
        </Callout>
        <SemTabs course={data.name} />
      </div>
    </section>
  );
}
