import { useState, useEffect } from "react";

import { notification } from "antd";

import { ArrowRight, Tick } from "@components/Icons/Icons";
import TextField from "@components/TextField/TextField";

import styles from "./QuoteForm.module.css";
import { sendContactForm } from "../../lib/api";
import axios from "axios";

interface QuoteFormProps {}

type FormState = {
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   comment: string;
};

const QuoteForm: React.FC<QuoteFormProps> = (): JSX.Element => {
   const [guestQuoteData, setGuestQuoteData] = useState<FormState>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comment: "",
   });

   const [loading, setLoading] = useState<boolean>(false);
   const [isSubmitted, setSubmitted] = useState<boolean>(false);

   const { email, phone, firstName, lastName, comment } = guestQuoteData;

   // const getLocation = async () => {
   //    const geoInfo = await axios.get("http://ip-api.com/json");
   //    console.log(geoInfo);
   // };
   // getLocation();

   const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
   ) => {
      const {
         target: { name, value },
      } = e;
      setGuestQuoteData((guestQuoteData) => ({ ...guestQuoteData, [name]: value }));
   };

   const handleClear = () => {
      setGuestQuoteData({
         firstName: "",
         lastName: "",
         email: "",
         phone: "",
         comment: "",
      });
   };

   const handleOnSubmit = async () => {
      setLoading(true);
      try {
         await sendContactForm(guestQuoteData);
         setSubmitted(true);
         setLoading(false);
         handleClear && handleClear();
         notification["success"]({
            message: "Form submitted successfully 👍🏻",
         });
      } catch (error) {
         if (error) {
            setLoading(false);
            setSubmitted(true);
            notification["error"]({
               message: "Failed to submit form 😰",
            });
         }
      }
   };

   return (
      <div className={styles.form_wrapper}>
         <div className={styles.form_box}>
            <div>
               <TextField
                  label="First Name"
                  type="text"
                  error="hello"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => handleInputChange(e)}
               />
               <TextField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => handleInputChange(e)}
               />
            </div>
            <div>
               <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleInputChange(e)}
               />
               <TextField
                  label="Phone"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => handleInputChange(e)}
               />
            </div>
            <div>
               <TextField
                  label="Comment"
                  type="text"
                  multiline
                  maxRows={7}
                  name="comment"
                  value={comment}
                  onChange={(e) => handleInputChange(e)}
               />
            </div>
         </div>
         <button data-submit="false" onClick={handleOnSubmit} disabled={loading}>
            {isSubmitted ? (
               <>
                  <Tick color="var(--primary-white)" />
                  Submitted
               </>
            ) : (
               <>
                  Submit <ArrowRight color="var(--primary-white)" />
               </>
            )}
         </button>
      </div>
   );
};

export default QuoteForm;
