import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Content from "@/components/pages/terms/Content";
import PageHeader from "@/components/pages/terms/PageHeader";
import React from "react";

export const metadata = {
  title: "Terms || Travel Tailor - Personalized Travel Experiences",
  description: "Travel Tailor - Personalized Travel Experiences",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <PageHeader />
        <Content />
        <FooterOne />
      </main>
    </>
  );
}
