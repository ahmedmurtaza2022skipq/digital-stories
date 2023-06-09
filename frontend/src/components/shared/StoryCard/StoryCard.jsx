import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StoryCard.module.css";
import TextStoryCard from "./Text/TextStoryCard";
import ImageStoryCard from "./Image/ImageStoryCard";
import VideoStoryCard from "./Video/VideoStoryCard";

// https://source.unsplash.com/random/250×250/?nature
function StoryCard({ story, grid }) {
  const navigate = useNavigate();

  // const avatarWrapperColors = [
  //   "#266CFF",
  //   "#4B47DB",
  //   "#33B357",
  //   "#F539",
  //   "#DE1B55",
  //   "#E9362F",
  // ];
  const avatarWrapperColors = "#444";

  // const randomColor =
  //   avatarWrapperColors[Math.floor(Math.random() * avatarWrapperColors.length)];

  const onStoryClickHandler = async () => {
    navigate("/story", { state: { id: story._id, avatarWrapperColors } });
  };

  return (
    <div
      className={`${grid ? styles.card : styles.cardList}`}
      onClick={(e) => onStoryClickHandler(e)}
    >
      <div
        className={`${styles.mediaWrapper} ${
          story.mediaType === "text" && styles.mediaWrapperText
        }`}
      >
        <div
          className={styles.avatarWrapper}
          style={{ border: `4px solid ${avatarWrapperColors}` }}
        >
          <img
            className={styles.avatarImage}
            src={story.postedBy.avatarPath}
            alt="avatar"
          />
        </div>

        {story.mediaType === "text" && (
          <TextStoryCard
            caption={story.caption}
            font={story.font}
            fontColor={story.fontColor}
          />
        )}

        {story.mediaType === "image" && (
          <ImageStoryCard caption={story.caption} image={story.image} />
        )}

        {story.mediaType === "video" && (
          <VideoStoryCard caption={story.caption} video={story.video} />
        )}
      </div>
    </div>
  );
}

export default StoryCard;
