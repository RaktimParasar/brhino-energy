// import { useState } from "react";

// import { notification } from "antd";

// import { ArrowRight, Tick } from "@components/Icons/Icons";
// import TextField from "@components/TextField/TextField";

// import styles from "./QuoteForm.module.css";
// import { sendContactForm } from "../../lib/api";

// interface QuoteFormProps {}

// type FormState = {
//    firstName: string;
//    lastName: string;
//    email: string;
//    phone: string;
//    comment: string;
// };

// const QuoteForm: React.FC<QuoteFormProps> = (): JSX.Element => {
//    const [guestQuoteData, setGuestQuoteData] = useState<FormState>({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       comment: "",
//    });

//    const [error, setError] = useState({
//       status: false,
//       message: "",
//       emailError: "",
//    });

//    const [loading, setLoading] = useState<boolean>(false);
//    const [isSubmitted, setSubmitted] = useState<boolean>(false);

//    const { email, phone, firstName, lastName, comment } = guestQuoteData;
//    const { status, message, emailError } = error;

//    const handleInputChange = (
//       e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
//    ) => {
//       const {
//          target: { name, value },
//       } = e;
//       setGuestQuoteData((guestQuoteData) => ({ ...guestQuoteData, [name]: value }));
//    };

//    const validateFormFields = () =>
//       new Promise<boolean>((resolve) => {
//          const formFields = Object.keys(guestQuoteData);
//          let formFieldsUnFilled = formFields.filter(
//             (field) => guestQuoteData[field as keyof FormState].trim() === ""
//          );
//          if (formFieldsUnFilled.length > 0) {
//             setError((error) => ({
//                ...error,
//                status: true,
//                message: "All fields are required",
//                emailError: "",
//             }));
//             resolve(false);
//             return;
//          } else if (!guestQuoteData?.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//             setError((error) => ({
//                ...error,
//                status: true,
//                message: "",
//                emailError: "Enter a valid email address",
//             }));
//             resolve(false);
//             return;
//          } else resolve(true);
//       });

//    const handleClear = () => {
//       setGuestQuoteData({
//          firstName: "",
//          lastName: "",
//          email: "",
//          phone: "",
//          comment: "",
//       });
//       setError({
//          status: false,
//          message: "",
//          emailError: "",
//       });
//    };

//    const handleOnSubmit = async () => {
//       const formFieldsValid = await validateFormFields();
//       if (formFieldsValid) {
//          setLoading(true);
//          try {
//             await sendContactForm(guestQuoteData);
//             setSubmitted(true);
//             setLoading(false);
//             handleClear && handleClear();
//             notification["success"]({
//                message: "Form submitted successfully 👍🏻",
//             });
//          } catch (error) {
//             if (error) {
//                setLoading(false);
//                setSubmitted(false);
//                setError({
//                   status: false,
//                   message: "",
//                   emailError: "",
//                });
//                notification["error"]({
//                   message: "Failed to submit form 😰",
//                });
//             }
//          }
//       }
//    };

//    return (
//       <div className={styles.form_wrapper}>
//          <div className={styles.form_box}>
//             <div>
//                <TextField
//                   label="First Name"
//                   type="text"
//                   error="hello"
//                   name="firstName"
//                   value={firstName}
//                   disabled={isSubmitted || loading}
//                   onChange={(e) => !loading && handleInputChange(e)}
//                />
//                <TextField
//                   label="Last Name"
//                   type="text"
//                   name="lastName"
//                   value={lastName}
//                   disabled={isSubmitted || loading}
//                   onChange={(e) => !loading && handleInputChange(e)}
//                />
//             </div>
//             <div>
//                <TextField
//                   label="Email"
//                   type="email"
//                   name="email"
//                   value={email}
//                   disabled={isSubmitted || loading}
//                   onChange={(e) => !loading && handleInputChange(e)}
//                />
//                <TextField
//                   label="Phone"
//                   type="tel"
//                   name="phone"
//                   value={phone}
//                   disabled={isSubmitted || loading}
//                   onChange={(e) => !loading && handleInputChange(e)}
//                />
//             </div>
//             <div>
//                <TextField
//                   label="Comment"
//                   type="text"
//                   multiline
//                   maxRows={7}
//                   name="comment"
//                   value={comment}
//                   disabled={isSubmitted || loading}
//                   onChange={(e) => !loading && handleInputChange(e)}
//                />
//             </div>
//          </div>
//          {status ? <p className={styles.error}>{message || emailError}</p> : null}
//          <button data-submit={isSubmitted} onClick={handleOnSubmit} disabled={loading || isSubmitted}>
//             {loading ? (
//                <span className={styles.dots_circle_spinner}></span>
//             ) : isSubmitted ? (
//                <>
//                   <Tick color="var(--primary-white)" />
//                   Submitted
//                </>
//             ) : (
//                <>
//                   Submit <ArrowRight color="var(--primary-white)" />
//                </>
//             )}
//          </button>
//       </div>
//    );
// };

// export default QuoteForm;
