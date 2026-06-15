import Image from "next/image";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import TextSlider from "./Text-slider";
import Services_slider from "./Service_slider";
import Parkersection from "./Parkersection";
import WhychooseUs from "./Whychooseus";
import Productsection from "./Productsection";
import FAQ_section from "./FAQ_section";
import Client_slider from "./Client_slider";
import Form_section from "./Form_section";
  import TestimonialSlider from "./TestimonialSlider";

  export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <TextSlider/>
    <Services_slider/>
    <Parkersection/>
    <WhychooseUs/>
   <Productsection/>
   <FAQ_section/>
   <Client_slider/>
   <TestimonialSlider />
   <Form_section/>

    </>

  );
}
