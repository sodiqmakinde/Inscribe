import Image from "next/image";

interface AuthorsProps {
  title: string;
  name: string;
  // image?: string;
}

const Author = ({ title, name }: AuthorsProps) => {
  return (
    <div className="flex items-center">
      <Image
        className="object-cover rounded-full mr-3"
        width={50}
        height={50}
        src="https://firebasestorage.googleapis.com/v0/b/inscribe-1b293.appspot.com/o/Headshot.jpeg?alt=media&token=e56de2f0-60ce-4a07-abdc-b3447298da2d"
        alt={name}
      />
      <div>
        <h2 className="text-lg max-[760px]:text-[16px] font-medium">{name}</h2>
        <p className="text-sm  max-[760px]:text-[14px]  font-normal text-fadeWhite">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Author;
