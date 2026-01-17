"use client";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
    </div>
  );
}
