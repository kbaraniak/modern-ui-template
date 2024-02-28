import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Contact from "~/components/contact";
import MapBox from "~/components/contact/map";

export const meta: MetaFunction = () => {
  return [
    { title: "Modern UI Template" },
    { name: "description", content: "modern-ui-template" },
  ];
};


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <Contact/>
      <MapBox/>
      <Footer />
    </div>
  );
}
