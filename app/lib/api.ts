import axios from "axios";
import type { UploadFile } from "antd/lib/upload/interface";

type Data = {
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   comment: string;
};

export const sendContactForm = async (data: Data) => {
   try {
      const response = await axios.post("/api/contact", data);
      return response.data;
   } catch (error) {
      throw new Error("Failed to send message");
   }
};

export const sendResumeToEmail = async (file: UploadFile[]) => {
   try {
      const response = await axios.post("/api/upload", file);
      return response.data;
   } catch (error) {
      throw new Error("Failed to upload resume");
   }
};
