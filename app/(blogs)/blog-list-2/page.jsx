import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero1 from "@/components/blogs/Hero1";
import BlogList2 from "@/components/blogs/BlogList2";

export const metadata = {
  title: "Blog-list-2 || Travel Tailor - Personalized Travel Experiences",
  description: "Travel Tailor - Personalized Travel Experiences",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <Hero1 />
        <BlogList2 />
        <FooterOne />
      </main>
    </>
  );
}
