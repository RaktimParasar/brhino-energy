import type { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";

import { Poppins } from "@next/font/google";

import { useState } from "react";
import { CloudUploadOutlined, EyeOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

import styles from "./UploadCV.module.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600"],
});

const UploadCV: React.FC = (): JSX.Element => {
   const [fileList, setFileList] = useState<UploadFile[]>([]);

   const onFileUpload = (data: UploadChangeParam<UploadFile<any>>) => {
      console.log(data);
      setFileList(data?.fileList);
   };

   const onFileRemove = (file: UploadFile<any>) => {};

   return (
      <div className={styles.upload_wrapper}>
         <Upload
            accept=".doc, .docx, .pdf"
            className="media-upload-section"
            listType="picture"
            fileList={fileList}
            onChange={onFileUpload}
            onRemove={onFileRemove}
            supportServerRender
            maxCount={1}
         >
            <span className={`${poppins.className} ${styles.add_icon}`}>+</span>
            <p className={`${poppins.className} ${styles.add_description}`}>
               Click on the icon to upload your resume
            </p>
         </Upload>
         <div className={styles.upload_actions}>
            <button className={poppins.className} onClick={() => ""}>
               Preview <EyeOutlined style={{ fontSize: 16 }} />
            </button>
            <button className={poppins.className} onClick={() => ""}>
               Upload <CloudUploadOutlined style={{ fontSize: 16 }} />
            </button>
         </div>
      </div>
   );
};

export default UploadCV;

/**
 * todo
 * write button disable logic when file is not uploaded
 */
