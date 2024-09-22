
import { getSemesters } from "@/server/packages/get-semesters";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Callout } from "@/components/ui/callout";

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
        <CardHeader>Courses</CardHeader>
        <Callout variant="error" title="This section will hold courses details" className=""/>
      </Card>
    </section>
  );
}
