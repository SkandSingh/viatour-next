import Invoice from "@/components/Invoice";
import React from "react";

export const metadata = {
  title: "Invoice || Travel Tailor - Personalized Travel Experiences",
  description: "Travel Tailor - Personalized Travel Experiences",
};

export default function page() {
  return (
    <>
      <main>
        <Invoice />
      </main>
    </>
  );
}
