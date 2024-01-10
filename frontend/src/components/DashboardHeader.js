import React from "react";
import { StyleSheet, css } from "aphrodite";
import searchIcon from "../assets/searchIcon.png";

const DashboardHeader = () => {
  return (
    <div className={css(styles.header)}>
      <div className={css(styles.buttonContainer)}>
        <div className={css(styles.homeButton)}>
          <button className={css(styles.headerButton)}>Home</button>
        </div>
        <button className={css(styles.headerButton)}>Messages</button>
        <button className={css(styles.headerButton)}>Notifications</button>
      </div>
      <div className={css(styles.logoContainer)}>
        <div className={css(styles.logo)}>
          <span className={css(styles.logoText)}>Wchat</span>
        </div>
      </div>
      <div className={css(styles.searchContainer)}>
        <input
          type="text"
          placeholder="Search"
          className={css(styles.searchInput)}
        />
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#0986CC",
    flexItemAlign: "center",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "30%",
  },
  homeButton: {
    color: "#B2E0C7",
    fontSize: "0.9375rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    transition: "background-color 0.2s ease-in-out",
    ":hover": {
      backgroundColor: "#35a0f0",
      color: "#0986CC",
      borderBottom: "1px solid #0986CC",
    },
  },
  headerButton: {
    backgroundColor: "#0986CC",
    color: "white",
    border: "none",
    padding: "10px",
    marginRight: "10px",
    cursor: "pointer",
    fontSize: "0.9375rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    transition: "background-color 0.2s ease-in-out",
    ":hover": {
      backgroundColor: "#35a0f0",
      color: "0986CC",
      borderBottom: "1px solid #0986CC",
    },
  },
  logoContainer: {
    display: "flex",
    width: "125px",
    height: "25%",
    flexShrink: "0",
  },
  logo: {
    display: "flex",
    width: "125px",
    height: "32px",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: "0",
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "medium",
    fontWeight: 300,
    lineHeight: "normal",
  },
  searchContainer: {
    borderBottom: "1px solid rgba(233, 233, 233, 0.50)",
  },
  searchInput: {
    padding: "8px 30px 8px 8px",
    border: "none",
    borderRadius: "4px",
    marginRight: "10px",
    backgroundColor: "#0986CC",
    color: "white",
    fontSize: "0.9375rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
    width: "13.5rem",
    height: "2rem",
    position: 'relative',
    '::placeholder': {
        color: 'rgba(255, 255, 255, 0.6)',
    },
  },
});

export default DashboardHeader;
