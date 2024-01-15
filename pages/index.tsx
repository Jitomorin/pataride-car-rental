import Head from "next/head";
// import Link from "components/Link";
import { EnvVars } from "env";
import { getAllPartners, getAllPosts, getClient } from "@/sanity/lib/client";
import Hero from "@/components/Hero";
import PlanTrip from "@/components/PlanTrip";
import PickCar from "@/components/PickCar";
import Banner from "@/components/Banner";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/Testimonials";
import RestAPI from "@/components/RestAPI";

const client = getClient();

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="We empower organizations through strategic HR solutions. We bridge skill gaps, foster diversity, and optimize workforce potential, delivering comprehensive HR consultancy services that ensure compliance, boost engagement, and drive sustainable growth."
        />
      </Head>
      <Hero />
      {/* <RestAPI /> */}
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      {/* <Faq /> */}
      {/* <Footer /> */}
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      posts: await getAllPosts(client),
      partners: await getAllPartners(client),
    },
  };
}
