import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "completed";
  return (
    <div
      className={styles.navigationCompleted}
      to="/"
      onClick={() => setActiveTab("completed")}>
      <div
        className={`${styles.navigationBar} ${isActive ? styles.active : ""}`}>
        <Link>Completed</Link>
      </div>
    </div>
  );
};

export default Index;
