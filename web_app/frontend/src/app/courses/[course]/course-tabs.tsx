"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { getSingleCourse } from "@/server/courses/get-single-course";
import CourseCard from "@/components/courses/course-card";
import YoutubeSection from "./youtube-section";
import { Suspense } from "react";
export default function SemTabs({ course }: { course: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Videos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Suspense>
          <YoutubeSection title={course} limit={8} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
