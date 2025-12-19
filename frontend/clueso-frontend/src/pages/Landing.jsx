import Navbar from "../components/navbar/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import TrustedBy from "../components/landing/TrustedBy";

// css
import "../components/landing/landing.css";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TrustedBy />
    </>
  );
}
