import Favorites from "@/components/dasboard/Fevorite";
import React from "react";

export const metadata = {
  title: "Dashboard-favorites || Travel Tailor - Personalized Travel Experiences",
  description: "Travel Tailor - Personalized Travel Experiences",
};

export default function page() {
  return (
    <>
      <main>
        <Favorites />
      </main>
    </>
  );
}
