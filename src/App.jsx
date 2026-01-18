import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ChatBot from "./components/ChatBot/ChatBot";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      {/* Pass showHeader prop to Header */}
      <Header show={true} />
      <main className="pt-20">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>

      {/* Global Components */}
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
};

export default App;

