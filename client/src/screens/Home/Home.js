import Layout from "../../components/Layout/Layout.js";
import About from "../../components/ui/About.js";
import KnowOwner from "../../components/ui/KnowOwner.js";
import LandingSection from "../../components/ui/LandingSection";

const Home = () => {
  return (
    <Layout>
      <LandingSection />
      <About/>
      <KnowOwner />
    </Layout>
  );
};

export default Home;
