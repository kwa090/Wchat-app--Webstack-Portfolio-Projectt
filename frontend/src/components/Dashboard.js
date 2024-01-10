import React from "react";
import { StyleSheet, css } from "aphrodite";
import DashboardHeader from "./DashboardHeader";
import Post from "./Post";

const Dashboard = () => {
  return (
    <div className={css(styles.dashboard)}>
      <DashboardHeader />

      <Post />
    </div>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    backgroundColor: 'F1F1F1',
  },
  mainContent: {
    padding: "20px",
  },
  welcomeMessage: {
    marginBottom: "20px",
  },
});

export default Dashboard;
