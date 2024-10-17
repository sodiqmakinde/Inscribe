import AllBlog from "@/components/AllBlog";
import Aside from "@/components/Aside";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className="container">
      <section className="min-[1024px]:grid gap-7 min-[1024px]:grid-cols-[75%_25%]">
        <div>
          <Navbar />
          <AllBlog />
        </div>
        <Aside />
      </section>
    </section>
  );
}
