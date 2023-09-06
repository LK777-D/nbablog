import BlogCard from "../UI/BlogCard";
import posts from "../BlogPosts";
import Headlines from "../components/Headlines";
import Header from "../components/Header";
import Socials from "../components/Socials";
import QuickNav from "../components/QuickNav";
import Popular from "../components/Popular";

/* eslint-disable react/prop-types */
const Blog = () => {
  return (
    <>
      <Header />
      <h1 className="text-white font2 text-sm lg:text-3xl p-1 text-center underline my-7">
        Stay informed and entertained with our NBA blog
      </h1>
      <section className="p-2 flex flex-col md:flex md:flex-row gap-3 md:p-10 ">
        <aside className=" p-5 bg-zinc-900 max-w-[40rem] rounded-lg ">
          <h1 className="text-md text-zinc-400 underline mb-5 ">
            Around The Legue For The Next Season
          </h1>
          <div className="flex flex-col gap-10">
            {posts.map((post) => (
              <BlogCard
                link={post.link}
                key={post.id}
                heading={post.heading}
                underText={post.underText}
                image={post.image}
              />
            ))}
          </div>
        </aside>
        <div className="hidden md:flex gap-3   ">
          <div className="md:flex md:flex-col md:gap-7">
            <Headlines />
          </div>
          <div className="flex flex-col gap-2">
            <QuickNav />
            <Socials />
            <Popular />
          </div>
        </div>
        <div className="flex flex-col gap-3 my-5 md:hidden">
          <QuickNav />
          <Popular />
          <Socials />
        </div>
      </section>
    </>
  );
};

export default Blog;
