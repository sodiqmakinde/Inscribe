'use client';
import { BlogPost } from '@/interface/types';
import { getBlogs } from '@/services/getBlog';
import { useQuery } from '@tanstack/react-query';
import parse from 'html-react-parser';
import DetailsHeader from './DetailsHeader';


type BlogDetailProps = {
  blog: BlogPost;
};

const DEFAULT_IMAGE_URL =
  'https://firebasestorage.googleapis.com/v0/b/imlearning-web.appspot.com/o/avatar.png?alt=media&token=1899eacc-a151-456d-8661-270e0dd0c844';

const cleanImageTags = (content: string): string => {
  return content
    .replace(/\\("|')/g, '$1')
    .replace(/src=["']([^"']*)["']/g, (match, p1) => `src="${p1}"`)
    .replace(/width=["']([^"']*)["']/g, (match, p1) => `width="${p1}"`)
    .replace(/height=["']([^"']*)["']/g, (match, p1) => `height="${p1}"`);
};

const BlogDetail = ({ blog }: BlogDetailProps) => {
  const {
    // data: blogs,
    // isLoading,
    // isError,
    // error,
    // isSuccess,
  } = useQuery<BlogPost[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });


  const cleanedContent = cleanImageTags(blog.content.replace(/\\n/g, '\n'));

  return (
    <section className="bg-white">
      <div className="container">
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
          <DetailsHeader
            title={blog.title}
            authorName={blog.author.name}
            authorThumbnail={blog.author.imageUrl || DEFAULT_IMAGE_URL}
            authorPosition={blog.author.role}
          />
          <div className="flex justify-between mx-auto max-w-screen-xl">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <div className="preMadeMarkdown">{parse(cleanedContent)}</div>
            </article>
          </div>
        </main>
      </div>
      {/* <div className="bg-grey">
        {isLoading && <Loader />}

        {isError && (
          <Alert variant="destructive">
            <Svg type="caution" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error?.message || 'An error occurred while fetching the blogs.'}</AlertDescription>
          </Alert>
        )}
        {isSuccess && relatedBlogs.length > 0 && <Related resources={relatedBlogs} resourceType="blog" />}
      </div> */}
    </section>
  );
};

export default BlogDetail;
