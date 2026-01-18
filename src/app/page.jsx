"use client";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";
import CTA from "@/components/CTA/CTA";
import Features from "@/components/Features/Features";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Followers from "@/components/Followers/Followers";

export default function Home() {
  

  return (
    <div>
      <Banner />
      <Category />
      <Features></Features>
      <CTA></CTA>
      <Stats></Stats>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
      <Followers></Followers>

     
    </div>
  );
}
