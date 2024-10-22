import Image from "next/image";

interface AuthorsProps {
  title: string;
  name: string;
  authorheadshot?: string;
}

const Author = ({ title, name, authorheadshot }: AuthorsProps) => {
  return (
    <div className="flex items-center">
      {authorheadshot && (
        <Image
          className="object-cover rounded-full mr-3"
          width={50}
          height={50}
          src={authorheadshot}
          alt={name}
        />
      )}
      <div>
        <h2 className="text-lg max-[760px]:text-[16px] font-medium">{name}</h2>
        <p className="text-sm max-[760px]:text-[14px] font-normal text-fadeWhite">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Author;
