import React from "react";
import styles from "./PageTitle.module.scss";

const PageTitle: React.FC<{ children: string }> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>
}

export default PageTitle
