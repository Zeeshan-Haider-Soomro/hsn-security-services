import { motion } from "framer-motion";
import {
  FaUserShield,
  FaShieldAlt,
  FaVideo,
  FaUserSecret,
  FaCar,
  FaFemale,
  FaDog,
  FaCalendarAlt,
  FaSkullCrossbones,
  FaSearch
} from "react-icons/fa";
import VideoHero from "../components/VideoHero";

export default function Services() {
  const services = [
    {
      icon: FaUserShield,
      title: "Security Guards",
      description: "Highly trained professional guards for residential, commercial and industrial protection.",
      features: ["Ex-Army Personnel", "Civilian Guards", "24/7 Monitoring", "Rigorous Scanning"],
    },
    {
      icon: FaUserSecret,
      title: "Escort Services",
      description: "Personalized security escorts for high net worth individuals and sensitive transportations.",
      features: ["Armed Escorts", "VIP Protection", "Discrepancy Control", "Safe Navigation"],
    },
    {
      icon: FaSkullCrossbones,
      title: "SSG Commando",
      description: "Elite protection services provided by retired Special Services Group commandos for ultimate security.",
      features: ["High-Risk Specialist", "Advanced Training", "Crisis Management", "Tactical Response"],
    },
    {
      icon: FaFemale,
      title: "Lady Searchers",
      description: "Specialized security for sensitive events requiring female security personnel for searching and monitoring.",
      features: ["Event Protocol", "Sensitive Searching", "Privacy Respect", "Professional Conduct"],
    },
    {
      icon: FaCalendarAlt,
      title: "Special Events",
      description: "End-to-end security management for large scale public or private events and weddings.",
      features: ["Crowd Management", "Loss Prevention", "Entry Guards", "Emergency Logistics"],
    },
    {
      icon: FaCar,
      title: "Mobile Patrols",
      description: "Round the clock mobile patrolling units to deter crime and provide rapid response.",
      features: ["GPS Tracking", "Rapid Deployment", "Area Surveillance", "Vehicle Security"],
    },
    {
      icon: FaVideo,
      title: "CCTV Surveillance",
      description: "Integrated tech-solutions for 24/7 monitoring of premises with advanced control rooms.",
      features: ["Remote Access", "Night Vision", "Centralized Command", "Tech Maintenance"],
    },
    {
      icon: FaDog,
      title: "Sniffer Dogs",
      description: "Professional K-Unit handlers and trained canines for explosive and drug detection.",
      features: ["Highly Trained Canines", "Nose Detection", "Patrol Support", "Certified Handlers"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Video Hero Section */}
      <VideoHero
        imageSrc="/hero_services.png"
        title="Our Security Services"
        subtitle="Professional Total Security Solutions Tailored to Your Needs"
        height="h-screen"
      />

      {/* Services Overview */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-black text-[#0A1A44] mb-4 uppercase tracking-tighter">
              World-Class Protection
            </h2>
            <div className="w-24 h-1 bg-[#A13A32] mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg font-medium">
              Since 2009, HSN Security has been partnering with clients to provide strategic safety and security services that mitigate risk and minimize loss.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 hover:-translate-y-4"
              >
                <div className="bg-[#0A1A44] w-20 h-20 rounded-3xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform duration-500 shadow-xl group-hover:bg-[#A13A32]">
                  <service.icon className="text-4xl text-white" />
                </div>

                <h3 className="text-2xl font-black text-[#0A1A44] mb-4 tracking-tight uppercase leading-none">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-gray-50">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#E1B546] rounded-full group-hover:w-3 transition-all"></div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-[#0A1A44]/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-24 px-4 bg-[#0A1A44] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Specialized Tasks</h2>
            <p className="text-xl text-gray-300 mb-12">
              Due to our veteran-led management team, we are ready to take any size and type of Security Management Task within shortest possible time.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <FaSearch className="text-[#A13A32] text-3xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Short-Term Gigs</h4>
                <p className="text-sm text-gray-400">Services for 12 hours, 8 hours, 1-2 days based on need.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <FaUserShield className="text-[#E1B546] text-3xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Vetted Recruiting</h4>
                <p className="text-sm text-gray-400">Guards enrollment on merit after proper background scanning.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#A13A32] to-[#E1B546] rounded-[3rem] blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1541872703-74c5e443d1f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Security Operations"
              className="relative rounded-[3rem] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0A1A44] to-[#A13A32] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Consult with Experts</h2>
            <p className="text-xl mb-10 opacity-90">
              Need a tactical risk assessment for your facility?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-[#0A1A44] px-10 py-5 rounded-full font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                Send Request
              </a>
              <a
                href="tel:02134680935"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#0A1A44] transition-all"
              >
                Call 021-34680935
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}