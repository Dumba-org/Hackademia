"use server";

import { axiosInstance } from "@/lib/server-axios-instance";
import { AxiosResponse, type AxiosError } from "axios";
export const getSingleCourse = async (id: string) => {
  try {
    const res: AxiosResponse = await axiosInstance.get(
      `api/courses/${id}?populate=*`,
    );

    return res.data.data;
  } catch (error: AxiosError | any) {
    console.log(error);

    // return [];
    return {
      error: error?.response?.data || { message: "An error occurred!" },
      status: error?.response?.status || 500,
    };
  }
};
