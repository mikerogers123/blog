export type Post = {
  brief: string;
  slug: string;
  title: string;
  id: string;
  dateAdded: string;
  readingTime: {
    text: string;
    words: number;
  }
  contentMarkdown: string;
};
