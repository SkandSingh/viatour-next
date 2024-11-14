import Profile from "@/components/dasboard/Profile";
import React from "react";

export const metadata = {
  title:
    "Dashboard-my-profile || Travel Tailor - Personalized Travel Experiences",
  description: "Travel Tailor - Personalized Travel Experiences",
};

export default function page() {
  return (
    <>
      <main>
        <Profile />
      </main>
    </>
  );
}
