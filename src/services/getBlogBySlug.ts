import { API } from "@/helpers/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { BlogPost } from "@/interface/types";

const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  const blogCollectionRef = collection(API, "blogs");
  const blogQuery = query(blogCollectionRef, where("slug", "==", slug));
  const snapshot = await getDocs(blogQuery);

  if (snapshot.empty) {
    return null;
  }

  const blogDoc = snapshot.docs[0];
  const blogData = blogDoc.data() as BlogPost;

  return {
    id: blogDoc.id,
    title: blogData.title,
    thumbnail: blogData.thumbnail,
    author: {
      name: blogData.author.name,
      role: blogData.author.role,
      imageUrl: blogData.author.imageUrl ?? "",
    },
    slug: blogData.slug ?? "",
    tags: blogData.tags,
    content: blogData.content,
    comments: blogData.comments,
    date: blogData.date,
    likes: blogData.likes,
    views: blogData.views ?? 0,
  };
};

export default getBlogBySlug;
