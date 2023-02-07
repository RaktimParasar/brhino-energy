import { useState, useEffect } from "react";

import styles from "./QuoteForm.module.css";

interface QuoteFormProps {}

const QuoteForm: React.FC<QuoteFormProps> = () => {
   return (
      <div className={styles.form_wrapper}>
         <div className={styles.form_box}>
            <div>
               {/* <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  required
                  error={false}
                  helperText=""
                  fullWidth
               /> */}
               {/* <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  required
                  error={false}
                  helperText=""
                  fullWidth
               /> */}
            </div>
            <div>
               {/* <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  required
                  error={false}
                  helperText=""
                  fullWidth
               />
               <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  required
                  error={false}
                  helperText=""
                  fullWidth
               /> */}
            </div>
            <div>
               {/* <TextField
                  id="outlined-multiline-static"
                  label="Comment"
                  variant="outlined"
                  multiline
                  minRows={5}
                  required
                  error={false}
                  helperText=""
                  fullWidth
               /> */}
            </div>
         </div>
      </div>
   );
};

export default QuoteForm;
