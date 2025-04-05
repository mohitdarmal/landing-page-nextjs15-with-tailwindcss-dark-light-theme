import ScrollToTop from "@/components/Helper/scroolToTop";
import Footer from "@/components/Home/footer";
import Home from "@/components/Home/home";
import Navbar from "@/components/Home/Navbar/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
