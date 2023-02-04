import { useState, useEffect } from "react";

import styles from "./QuoteForm.module.css";

interface QuoteFormProps {}

const QuoteForm: React.FC<QuoteFormProps> = () => {
   return (
      <div className={styles.form_container}>
         <div className={styles.form_wrapper}></div>
      </div>
   );
};

export default QuoteForm;
