import React from "react";
import Header from "./Header";
import Body from "./Body";
import { StyleSheet, css } from "aphrodite";
import UserProfile from "./UserProfile";

const LandingPage = (isSignUp) => {
  
  return (
    <div className={css(styles.landingPage)}>
      <Header />
      {isSignUp ? <Body />: <UserProfile /> }
    </div>
  );
};

const styles = StyleSheet.create({
  landingPage: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
  },
});

export default LandingPage;
