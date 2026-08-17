import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { Materials } from "../components/Materials";
import { Services } from "../components/Services";
import { TruckDelivery } from "../components/TruckDelivery";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { HowItWorks } from "../components/HowItWorks";
import { Applications } from "../components/Applications";
import { ServiceAreas } from "../components/ServiceAreas";
import { CTABanner } from "../components/CTABanner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import { site } from "../lib/site";

const title = "Sand & Gravel Supplier in Abu Dhabi | Sand and Gravel Concrete Supply";
const description =
  "Sand, gravel, aggregates and building materials supplied across Abu Dhabi, Mussafah and the UAE with fast 24/7 delivery by 3-ton dumper and pickup trucks.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          description:
            "Supplier of sand, gravel, aggregates and construction materials in Abu Dhabi and the UAE.",
          telephone: site.phone,
          email: site.email,
          openingHours: "Mo-Su 00:00-23:59",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mussafah Industrial Area",
            addressLocality: "Abu Dhabi",
            addressCountry: "AE",
          },
          areaServed: ["Abu Dhabi", "Mussafah", "Abu Dhabi Industrial City", "United Arab Emirates"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Materials />
        <Services />
        <TruckDelivery />
        <WhyChooseUs />
        <HowItWorks />
        <Applications />
        <ServiceAreas />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
