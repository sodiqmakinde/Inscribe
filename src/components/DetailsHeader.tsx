import Image from "next/image";
import Author from "./Author";

const DEFAULT_IMAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/imlearning-web.appspot.com/o/avatar.png?alt=media&token=1899eacc-a151-456d-8661-270e0dd0c844";

type DetailsHeaderProps = {
  title: string;
  authorName?: string;
  thumbnail?: string;
  authorThumbnail?: string;
  authorPosition?: string;
};

const DetailsHeader = ({
  title,
  thumbnail,
  authorName = "External Resources",
  authorThumbnail = DEFAULT_IMAGE_URL,
  authorPosition = "Content Writer",
}: DetailsHeaderProps) => {
  return (
    <div className="flex gap-5 mx-auto max-w-screen-xl">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="border-b pb-5 not-format">
          <Author
            name={authorName}
            title={authorPosition}
            authorheadshot={authorThumbnail}
          />

          <h1 className=" mt-5 mb-5 text-2xl font-semibold text-gray-900 lg:text-4xl">
            {title}
          </h1>
          {thumbnail && (
            <Image
              quality={100}
              src={thumbnail}
              alt={title}
              className="w-full h-[300px] rounded-md  max-[768px]:h-[180px] object-cover"
              width={346}
              height={216}
            />
          )}
        </header>
      </article>
    </div>
  );
};

export default DetailsHeader;
