import { collection, getDocs } from "firebase/firestore";
import { API } from "@/helpers/firebase-config";
import { BlogPost } from "@/interface/types";

export const getBlogs = async (): Promise<BlogPost[]> => {
  const BlogCollectionRef = collection(API, "blogs");
  try {
    const data = await getDocs(BlogCollectionRef);
    return data.docs.map((doc) => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const { id, ...restOfTheBlogType } = doc.data() as BlogPost;
      return {
        id,
        ...restOfTheBlogType,
      };
    });
  } catch (error) {
    console.log("getBlogsError", error);
    throw new Error("Unable to retrieve blogs");
  }
};
