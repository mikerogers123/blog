import { Post } from "../models/post";

export const estimateReadTime = (post: Post) => {
    const averageWordsPerMinute = 265; // Medium uses 265 WPM - https://medium.com/blogging-guide/how-is-medium-article-read-time-calculated-924420338a85
    const words = post.content.trim().split(/\s+/).length;
    return Math.ceil(words / averageWordsPerMinute);
  }