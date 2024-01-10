import React from "react";
import { StyleSheet, css } from "aphrodite";

const Header = () => {
  return (
    <div className={css(styles.header)}>
      <div className={css(styles.headerLeft)}>
        <div className={css(styles.logoContainer)}>
          <div className={css(styles.logo)}>
            <span className={css(styles.logoText)}>Wchat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "70px",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexAlign: "left",
  },
  headerLeft: {
    width: '35%',
    height: '100%',
    backgroundColor: '#0986CC',
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
    paddingLeft: "20px",
    paddingTop: "20px",
  },

  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "medium",
    fontWeight: 300,
    lineHeight: "normal",

  },
});

export default Header;
