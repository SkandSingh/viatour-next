import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tours/PageHeader";
import TourList3 from "@/components/tours/TourList3";
import React from "react";

export const metadata = {
  title: "Tour-list-4 || Travel Tailor - Personalized Travel Experiences",
  description: "Travel Tailor - Personalized Travel Experiences",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <PageHeader />
        <TourList3 />
        <FooterOne />
      </main>
    </>
  );
}
