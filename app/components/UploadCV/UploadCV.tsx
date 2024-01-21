// import type { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";

// import { Poppins } from "@next/font/google";

// import { useState } from "react";
// import { message, Upload } from "antd";
// import { CloudUploadOutlined, EyeOutlined } from "@ant-design/icons";

// import { sendResumeToEmail } from "../../lib/api";
// import { Tick } from "@components/Icons/Icons";

// import styles from "./UploadCV.module.css";
// import loadingStyles from "../QuoteForm/QuoteForm.module.css";

// const poppins = Poppins({
//    subsets: ["latin"],
//    weight: ["400", "600"],
// });

// const UploadCV: React.FC = (): JSX.Element => {
//    const [fileList, setFileList] = useState<UploadFile[]>([]);
//    const [loading, setLoading] = useState<boolean>(false);
//    const [submitted, setSubmitted] = useState<boolean>(false);

//    const onFileUpload = (data: UploadChangeParam<UploadFile<any>>) => {
//       if (
//          data?.file?.type?.includes("pdf" || "msword") &&
//          data?.file?.size &&
//          data?.file.size / 1024 / 1024 > 2
//       ) {
//          message.error("Maximum document upload size limit is 2 MB");
//          return;
//       }
//       setFileList(data?.fileList);
//    };

//    const handlePreview = () => {
//       const file = fileList?.[0]?.originFileObj;
//       if (file) {
//          const fileUrl = URL.createObjectURL(file);
//          const pdfWindow = window.open(fileUrl, "_blank");
//          if (pdfWindow) {
//             pdfWindow.focus();
//          } else {
//             message.error("Failed to open PDF preview");
//          }
//       } else {
//          message.info("Please add your resume to preview");
//       }
//    };

//    const readFileAsBuffer = (file: any): Promise<Buffer> => {
//       return new Promise((resolve, reject) => {
//          const reader = new FileReader();

//          reader.onload = () => {
//             const buffer = Buffer.from(reader.result as ArrayBuffer);
//             resolve(buffer);
//          };

//          reader.onerror = () => {
//             reject(new Error("Failed to read file"));
//          };

//          reader.readAsArrayBuffer(file.originFileObj as any);
//       });
//    };

//    const handleSendResume = async () => {
//       const [file] = fileList || [];
//       if (!file) {
//          message.info("Please add your resume to upload");
//          return;
//       }
//       setLoading(true);
//       try {
//          const { name, type } = file?.originFileObj as Blob;
//          const fileBuffer = await readFileAsBuffer(file);
//          await sendResumeToEmail(fileBuffer, name, type);
//          setSubmitted(true);
//          setLoading(false);
//          message.success("Resume uploaded successfully 👍🏻");
//       } catch (error) {
//          if (error) {
//             setLoading(false);
//             setSubmitted(false);
//             console.log("error", error);
//             message.error("Something went wrong please try again later");
//          }
//       }
//    };

//    return (
//       <div className={styles.upload_wrapper}>
//          <Upload
//             accept=".doc, .pdf"
//             className="media-upload-section"
//             listType="picture"
//             fileList={fileList}
//             onChange={onFileUpload}
//             supportServerRender
//             maxCount={1}
//             disabled={submitted || loading}
//             beforeUpload={() => {
//                return false;
//             }}
//          >
//             <span className={`${poppins.className} ${styles.add_icon}`}>+</span>
//             <p className={`${poppins.className} ${styles.add_description}`}>
//                Click on the icon to add your resume
//             </p>
//          </Upload>
//          <div className={styles.upload_actions}>
//             {!submitted && !loading && (
//                <button className={poppins.className} onClick={handlePreview} disabled={submitted || loading}>
//                   Preview <EyeOutlined style={{ fontSize: 16 }} />
//                </button>
//             )}
//             <button
//                className={poppins.className}
//                data-submit={submitted}
//                onClick={handleSendResume}
//                disabled={submitted || loading}
//             >
//                {loading ? (
//                   <>
//                      Uploading <span className={loadingStyles.dots_circle_spinner}></span>
//                   </>
//                ) : submitted ? (
//                   <>
//                      <Tick color="var(--primary-white)" />
//                      Uploaded
//                   </>
//                ) : (
//                   <>
//                      Upload <CloudUploadOutlined style={{ fontSize: 16 }} />
//                   </>
//                )}
//             </button>
//          </div>
//       </div>
//    );
// };

// export default UploadCV;
