"use client";
import CourseCard from "@/components/courses/course-card";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function SemTabs({ courses }: { courses: any }) {
  return (
    <Tabs defaultValue="courses" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="courses">Courses</TabsTrigger>
        <TabsTrigger value="videos">Practicals</TabsTrigger>
      </TabsList>
      <TabsContent value="courses">
        <Card>
          <CardHeader>
            <CardTitle>Courses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {courses?.map((course: any) => (
              <CourseCard id={course.documentId} key={course.documentId} />
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Practials">
        <Card>
          <CardHeader>
            <CardTitle>Practicals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">No practicals found</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
