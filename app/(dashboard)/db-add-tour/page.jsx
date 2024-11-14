import AddTour from "@/components/dasboard/AddTour";
import React from "react";

export const metadata = {
  title: "Dashboard-add-tour || Travel Tailor - Personalized Travel Experiences",
  description: "Travel Tailor - Personalized Travel Experiences",
};

export default function page() {
  return (
    <>
      <main>
        <AddTour />
      </main>
    </>
  );
}
