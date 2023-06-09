class StoryDTO {
  constructor(story) {
    this._id = story._id;
    this.caption = story.caption;
    this.font = story.font;
    this.fontColor = story.fontColor;
    this.mediaType = story.mediaType;
    this.image = story.image;
    this.video = story.video;
    this.postedBy = story.postedBy.id;
    this.upVotes = story.upVoteCount;
    this.downVotes = story.downVoteCount;
    this.date = story.createdAt;
    this.isPrivate = story.isPrivate;
  }
}

module.exports = StoryDTO;
