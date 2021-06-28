export type SiteMetadata = {
  url: string;
  title: string;
  description: string;
  keywords: string;
  author: string;
};

export type MarkdownMetadata = {
  slug: string;
  date: string;
  title: string;
  description: string;
  keywords: string;
  author?: string;
  image?: Image;
  template?: string;
  demo?: string;
};

export type Meta =
  | { name: string; content: string }
  | { property: string; content: string | number | null };

export type Image = {
  src: string;
  height: number;
  width: number;
};
