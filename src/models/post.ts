export type Post = {
  slug: string;
  title: string;
  id: string;
  dateAdded: string;
  content: string;
  link: string;
};

export type PostQuery = { 
    allPersonalMediumFeed: PostSource; 
    allMediumFeed: PostSource;
};

export type PostSource = {
  nodes: Post[];
};
