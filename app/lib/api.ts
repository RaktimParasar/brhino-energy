import axios from "axios";

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
