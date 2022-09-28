import { Post } from "../models/post";

export const searchMatches = (searchTerm: string) => {
  return (post: Post) => {
    const matchesTitle = () => post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesContent = () => post.contentMarkdown.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTitle() || matchesContent();
  };
};
