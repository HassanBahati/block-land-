import Layout from "../../components/Layout/Layout.js";
import About from "../../components/ui/About.js";
import Contact from "../../components/ui/Contact.js";
import KnowOwner from "../../components/ui/KnowOwner.js";
import LandingSection from "../../components/ui/LandingSection";
import Properties from "../../components/ui/Properties.js";

const Home = () => {
  return (
    <Layout>
      <LandingSection />
      <About/>
      <KnowOwner />
      <Properties/>
      <Contact/>
    </Layout>
  );
};

export default Home;
