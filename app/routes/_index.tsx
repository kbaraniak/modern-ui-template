import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Welcome from "~/components/home/welcome";
import Services from "~/components/home/services";
import Hero from "~/components/home/hero";
import CTA from "~/components/home/cta";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <Welcome />
      <Services />
      <Hero />
      <CTA />
      <Footer />
    </div>
  );
}
