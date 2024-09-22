"use server";

import { axiosInstance } from "@/lib/server-axios-instance";
import { ApiPackagePackage } from "@/types/contentTypes";
import {
  APIResponse,
  APIResponseCollection,
  APIResponseData,
} from "@/types/types";
import { AxiosResponse, type AxiosError } from "axios";
export const getSingleSemester = async (id: string) => {
  try {
    const res: AxiosResponse = await axiosInstance.get(
      `api/semesters/${id}?populate=*`,
    );

    return res.data.data;
  } catch (error: AxiosError | any) {
    return {
      error: error?.response?.data || { message: "An error occurred!" },
      status: error?.response?.status || 500,
    };
  }
};
