import { getSemesters } from "@/server/packages/get-semesters";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default async function SemestersPage() {
  const data: any[] = await getSemesters();
  console.log(data, data[0].courses);
  if (!data) {
    return (
      <section className="container font-poppins">
        No semesters available
      </section>
    );
  }
  return (
    <section className="container font-poppins">
      <Card>
        <CardHeader>Semesters</CardHeader>
        <CardContent>
          <Accordion type="multiple">
            {data.map((sem: any, index) => (
              // @ts-ignore
              <AccordionItem key={sem.id} value={sem.id}>
                <AccordionTrigger className="text-lg md:text-xl lg:text-xl">
                  {/* @ts-ignore */}
                  <Link href={`/semesters/${sem.documentId}`}>{sem.Name}</Link>
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-xl lg:text-xl">
                  {sem.courses.map((course: any) => (
                    <Link href={`/courses/${course.documentId}`}>
                      <li className="w-full text-sm hover:underline" key={course.name}>
                        {/* @ts-ignore */}
                        {course.name}
                      </li>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
