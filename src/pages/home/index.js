import React from "react";
import HeroSection from "./../../components/HeroSection";
import ClientsSection from "./../../components/ClientsSection";
import TeamBiosSection2 from "./../../components/TeamBiosSection2";
import FeaturesSection from "./../../components/FeaturesSection";
import ContactSection from "./../../components/ContactSection";
import NewsletterSection from "./../../components/NewsletterSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        title="QWild"
        subtitle="Subheading can go here..."
        buttonText="Get Started"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <ClientsSection color="light" size="normal" title="" subtitle="" />
      <TeamBiosSection2
        color="white"
        size="medium"
        title="Found an injured animal or want more info?"
        subtitle=""
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Look out for our QWild Cards!"
        subtitle="QWild Cards can be found around Queensland. Explore your local area and learn more about the wildlife you share your backyard with."
      />
      <ContactSection
        color="white"
        size="medium"
        title="Report a wildlife sighting"
        subtitle="Spotted wildlife in your area? Let us know & help us maintain accurate data"
        showNameField={true}
        buttonText="Lodge Wildlife Report"
      />
      <NewsletterSection
        color="white"
        size="medium"
        title="Stay in the know"
        subtitle="Receive our latest articles, animal facts and updates"
        buttonText="Subscribe"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default HomePage;
