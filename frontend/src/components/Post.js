import React, { useState, useRef } from "react";
import { StyleSheet, css } from "aphrodite";
import cameraIcon from "../assets/camera.png";

const Post = () => {
  const [postContent, setPostContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handlePlusSignClick = () => {
    fileInputRef.current.click();
  };

  const handlePostSubmit = () => {
    // Perform the logic for submitting the post
    // You can send the post content and the selected file to your backend or handle it as needed

    // Reset form after submission
    setPostContent("");
    setSelectedFile(null);
  };

  return (
    <div className={css(styles.postContainer)}>
      <div className={css(styles.attachContainer)}>
        <label htmlFor="fileInput" className={css(styles.attachIconLabel)}>
          <img
            src={cameraIcon}
            alt="Attached media"
            className={css(styles.attachedMedia)}
            onClick={handlePlusSignClick}
          />
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*, video/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      <div className={css(styles.textAreaPost)}>
        <textarea
          placeholder="What's on your mind?"
          value={postContent}
          onChange={handlePostContentChange}
          className={css(styles.postInput)}
        />
        <button
          className={css(styles.postButton)}
          onClick={handlePostSubmit}
          disabled={!postContent && !selectedFile}
        >
          Post
        </button>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    width: "28.3125rem",
    height: "5.1875rem",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "none",
  },
  postInput: {
    padding: "10px",
    border: "none",
    resize: "none",
    width: "19.5rem",
    height: "2.5625rem",
    flexShrink: "0",
    backgroundColor: "transparent",
  },
  attachContainer: {
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
    width: '40px',
    height: '40px',
  },
  attachIcon: {
    position: "relative",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    overflow: "hidden",
    cursor: "pointer",
    marginRight: "10px",
    background: "#ddd",
  },
  plusSignContainer: {
    position: "absolute",
    bottom: "0",
    right: "0",
    background: "#0986CC",
    color: "white",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  plusSign: {
    fontSize: "1.5rem",
  },
  attachedMedia: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  textAreaPost: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    boxShadow: "1px 1px 4px 0px rgba(9, 134, 204, 0.25) inset",
    backgroundColor: "#D9D9D9",
    width: "24.5rem",
    height: "2.5625rem",
    flexShrink: "0",
    borderRadius: "3.125rem",
  },
  postButton: {
    backgroundColor: "#0986CC",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "3.125rem",
    cursor: "pointer",
    width: "4.9375rem",
    height: "2.375rem",
    alignSelf: "flex-end",
  },
});

export default Post;
