// import ErrorPage from "@/app/not-found";
import BlogDetail from "@/components/BlogDetails";
import Loader from "@/components/Loader";
import { getDynamicMetadata } from "@/helpers/getDynamicMetadata";
import getBlogBySlug from "@/services/getBlogBySlug";
import { Metadata } from "next";

type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return getDynamicMetadata({
    title: blog.title,
    description: blog.content,
  });
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return <Loader />;
  }

  return <BlogDetail blog={blog} />;
};

export default BlogDetailPage;
