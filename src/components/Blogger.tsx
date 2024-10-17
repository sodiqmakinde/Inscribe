import Author from "./Author";
import TagButton from "./TagButton";

interface BloggerType {
  title: string;
  name: string;
}

export const Blogger = ({}: BloggerType) => {
  return (
    <div className="flex items-center justify-between my-5">
      <Author title="Software Engineer" name="John Doe" />
      <TagButton label="View" isLink={true} href="/about" />
    </div>
  );
};
