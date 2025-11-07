"use client"
import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer.jsx/page";
import Navbar from "@/components/Navbar/Navbar";
import useMediaQuery from "@/components/UseMediaQuery";
import Image from "next/image";

export default function Home() {
  const mobile = useMediaQuery();
  return (
    <>
      <Navbar />
      {/* <Banner
        location={"/available"}
        h2Text={"Mini Donkeys for Sale"}
        pText={
          "Mini Donkeys for sale! We will help you find your perfect mini donkey as a new family member."
        }
        img={"/images/pexels-hermaion-998701.jpg"}
        button={"AVAILABLE DONKEYS"}
        diff={false}
        height={mobile ? "50svh" : "70svh"}
      /> */}
      <Content />
      <Footer />
    </>
  );
}
