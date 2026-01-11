import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ChatBot from "./components/ChatBot/ChatBot";
import WhatsAppButton from "./components/WhatsAppButton";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [showHeader, setShowHeader] = useState(true);
  const footerRef = useRef(null);

  const handleScroll = () => {
    if (footerRef.current) {
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Agar footer screen me visible ho → hide header
      setShowHeader(footerTop > windowHeight);
      // footer top > window height → header show
      // footer top <= window height → header hide
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <ScrollToTop />
      {/* Pass showHeader prop to Header */}
      <Header show={showHeader} />
      <main className="pt-20">
        <Outlet />
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>

      {/* Global Components */}
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
};

export default App;

