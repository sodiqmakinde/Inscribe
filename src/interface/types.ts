export type BlogPost = {
  id: string;
  title: string;
  thumbnail: string;
  slug: string;
  content: string;
  comment: number;
  date: { seconds: number; nanoseconds: number };
  likes: number;
  views?: number;
  author: {
    imageUrl?: string;
    name: string;
    role: string;
  };
  tags: string[];
};
