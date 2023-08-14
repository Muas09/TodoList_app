import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "all";
  return (
    <div
      className={styles.navigationAll}
      to="/"
      onClick={() => setActiveTab("all")}>
      <div
        className={`${styles.navigationBar} ${isActive ? styles.active : ""}`}>
        <Link>All</Link>
      </div>
    </div>
  );
};

export default Index;
