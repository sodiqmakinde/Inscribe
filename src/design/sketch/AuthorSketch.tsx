import { Skeleton } from "../custom/skeleton";

const AuthorSketch = () => {
  return (
    <div className="flex items-center">
      <Skeleton className="object-cover rounded-full mr-3 h-[50] w-[50]" />
      {/* <Image
        className="object-cover rounded-full mr-3"
        width={50}
        height={50}
        src="https://firebasestorage.googleapis.com/v0/b/inscribe-1b293.appspot.com/o/Headshot.jpeg?alt=media&token=e56de2f0-60ce-4a07-abdc-b3447298da2d"
        alt={name}
      /> */}
      {/* <div>
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-sm font-normal text-fadeWhite">{title}</p>
      </div> */}
    </div>
  );
};

export default AuthorSketch;
