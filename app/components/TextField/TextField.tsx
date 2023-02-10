import { Poppins } from "@next/font/google";

import styles from "./TextField.module.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600"],
});

interface TextFieldProps {
   label?: string;
   type?: React.HTMLInputTypeAttribute;
   multiline?: boolean;
   maxRows?: number;
   error?: string;
   name?: string;
   value?: string | number;
   disabled?: boolean;
   onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
   label,
   type = "text",
   multiline,
   maxRows,
   name,
   value,
   disabled,
   onChange,
}): JSX.Element => {
   const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
   ) => {
      onChange && onChange(e);
   };
   return (
      <div className={styles.text_field_root}>
         {multiline ? (
            <>
               <textarea
                  placeholder=" "
                  autoComplete="off"
                  rows={maxRows}
                  required
                  name={name}
                  value={value}
                  disabled={disabled}
                  onChange={handleInputChange}
                  className={poppins.className}
               />
               <label className={poppins.className}>{label}*</label>
            </>
         ) : (
            <>
               <input
                  placeholder=" "
                  autoComplete="off"
                  type={type}
                  required
                  name={name}
                  value={value}
                  disabled={disabled}
                  onChange={handleInputChange}
                  className={poppins.className}
               />
               <label className={poppins.className}>{label}*</label>
            </>
         )}
      </div>
   );
};

export default TextField;
