import "./App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CabinsList from "@/components/CabinsList";
import Contact from "@/components/Contact";
import Nature from "@/components/Nature";
import PhotoGallery from "@/components/PhotoGallery";
import About from "@/components/About";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <CabinsList />
        <Nature />
        <PhotoGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
