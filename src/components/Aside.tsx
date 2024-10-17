import Author from "./Author";
import { Blogger } from "./Blogger";
import Recommended from "./Recommended";
import TagButton from "./TagButton";

const Aside = () => {
  return (
    <div className="border-borderColor  min-[1024px]:pl-5 min-[1024px]:border-l ">
      <div className="mt-9">
        <p>Post</p>
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          People you might be intrested in
        </h2>
        <Blogger name="Fola Awolowo" title="Singer" />
        <Blogger name="Fola Awolowo" title="Singer" />
        <Blogger name="Fola Awolowo" title="Singer" />
        <Blogger name="Fola Awolowo" title="Singer" />
      </div>
      <Recommended />
      <div className="">
        <h2 className="text-2xl font-semibold mt-10 mb-4">People to follow</h2>
        <Blogger name="Fola Awolowo" title="Singer" />
        <Blogger name="Fola Awolowo" title="Singer" />
        <Blogger name="Fola Awolowo" title="Singer" />
        <Blogger name="Fola Awolowo" title="Singer" />
      </div>
    </div>
  );
};

export default Aside;
