import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "active";

  const handleLinkClick = () => {
    setActiveTab("active");
  };

  return (
    <div className={styles.navigationActive} to="/" onClick={handleLinkClick}>
      <div
        className={`${styles.navigationBar} ${isActive ? styles.active : ""}`}>
        <Link>Active</Link>
      </div>
    </div>
  );
};

export default Index;
