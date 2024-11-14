import DBListing from "@/components/dasboard/DBListing";
import React from "react";

export const metadata = {
  title: "Dashboard-listing || Travel Tailor - Personalized Travel Experiences",
  description: "Travel Tailor - Personalized Travel Experiences",
};

export default function page() {
  return (
    <>
      <main>
        <DBListing />
      </main>
    </>
  );
}
