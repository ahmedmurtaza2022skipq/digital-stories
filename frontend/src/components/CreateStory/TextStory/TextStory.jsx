import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TextStory.module.css";
import Button from "../../shared/Button/Button";
import { createStory } from "../../../api";
import { globalContext } from "../../../context/globalContext";

function TextStory() {
  const {
    isPrivate,
    onPrevHandler,
    clearContext,
    caption,
    setCaption,
    font,
    setFont,
    fontColor,
    setFontColor,
    blue,
    green,
    pink,
  } = useContext(globalContext);

  const [hover, setHover] = useState(false);

  const activeColorWrapperStyle = { border: "4px solid #B6CDFF" };

  const navigate = useNavigate();

  const createStoryHandler = async () => {
    const story = {
      mediaType: "text",
      caption,
      font,
      fontColor:
        fontColor === "#0077ff"
          ? "blue"
          : fontColor === "#33b357"
          ? "green"
          : "pink",
      isPrivate,
    };

    const response = await createStory(story);
    clearContext();

    if (response.status === 201) {
      onPrevHandler(); // reset the create story form to step 1
      navigate("/");
    }
  };

  return (
    <>
      {" "}
      <textarea
        placeholder="Caption"
        className={styles.caption}
        maxLength={200}
        value={caption}
        onChange={(e) => {
          setCaption(e.target.value);
        }}
        style={{
          fontFamily: font,
          color: fontColor,
        }}
      />
      <div className={styles.customizationMenuWrapper}>
        <div className={styles.selectWrapper}>
          <select
            value={font}
            onChange={(e) => {
              setFont(e.target.value);
            }}
          >
            <option value="Times New Roman">Times New Roman</option>
            <option value="Cursive">Cursive</option>
            <option value="Monospace">Monospace</option>
          </select>
        </div>

        <div className={styles.paletteWrapper}>
          <div
            onClick={() => {
              setFontColor(blue);
            }}
            className={`${styles.colorPalette} ${styles.blue}`}
            style={fontColor === blue ? activeColorWrapperStyle : {}}
          />

          <div
            onClick={() => {
              setFontColor(green);
            }}
            className={`${styles.colorPalette} ${styles.green}`}
            style={fontColor === green ? activeColorWrapperStyle : {}}
          />

          <div
            onClick={() => {
              setFontColor(pink);
            }}
            className={`${styles.colorPalette} ${styles.pink}`}
            style={fontColor === pink ? activeColorWrapperStyle : {}}
          />
        </div>
      </div>
      <Button
        buttontitle="Post"
        buttonimage="party_popper"
        onClick={createStoryHandler}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ backgroundColor: hover ? "#444" : "#777" }}
        disabled={caption === ""}
      />
    </>
  );
}

export default TextStory;
