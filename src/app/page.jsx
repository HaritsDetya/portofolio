import Dashboard from "@/components/Dashboard";
import Home from "@/components/Home";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function home() {
  return (
    <>
      <Dashboard/>
      <Home/>
      <About/>
      <Education/>
      <Experience/>
      <Footer/>
    </>
  );
}
