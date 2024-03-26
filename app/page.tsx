import Navbar from "@/components/Navbar";
import CustomerReviews from "@/sections/CustomerReviews";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import PopularProducts from "@/sections/PopularProducts";
import Services from "@/sections/Services";
import SpecialOffer from "@/sections/SpecialOffer";
import Subscribe from "@/sections/Subscribe";
import SuperQuality from "@/sections/SuperQuality";
import Image from "next/image";

export default function Home() {
  return (
      <main className="relative flex-col flex ">
          <Navbar/>
          <Hero/>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding bg-gray-100">
          <Services/>
        </section>
        <section className="padding ">
          <SpecialOffer/>
        </section>
        <section className="padding bg-slate-100">
          <CustomerReviews/>
        </section>
        <section className="padding">
          <Subscribe/>
        </section>
        <section className="padding bg-black">
          <Footer/>
        </section>
      </main>
  );
}
