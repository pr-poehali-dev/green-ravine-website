import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CabinsList from "@/components/CabinsList";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <CabinsList />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;