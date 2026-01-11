import { motion } from "framer-motion";
import { FaShieldAlt, FaUsers, FaAward, FaCheckCircle, FaStar, FaGlobe, FaCertificate } from "react-icons/fa";
import VideoHero from "../components/VideoHero";

export default function About() {
  const stats = [
    { number: "2009", label: "Established" },
    { number: "100s", label: "Security Guards" },
    { number: "100%", label: "Govt Compliant" },
    { number: "24/7", label: "Control Room" },
  ];

  const credentials = [
    "A Category license (Weapon)",
    "NOC Ministry of interior",
    "Operating license Punjab",
    "Operating license Sindh",
    "Certificate of APSAA",
    "Certificate of SECP"
  ];

  const strategicShortTerm = [
    "Expansion of business",
    "Opening of new branches",
    "Enhanced customer delight",
    "Follow CRM practices",
    "Emphasis on HR practices",
    "Broad based services"
  ];

  const strategicLongTerm = [
    "Consolidation of business",
    "Sustained growth",
    "Satisfaction of stakeholders",
    "Industry Role model",
    "Opening of Global office",
    "Vertical expansion"
  ];

  return (
    <div className="bg-white">
      {/* Video Hero Section */}
      <VideoHero
        imageSrc="/hero_about.png"
        title="About HSN Security"
        subtitle="Professional Total Security Solutions and Risk Management"
        height="h-screen"
      />

      {/* CEO Message */}
      <section className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-48 h-64 flex-shrink-0 relative z-10">
                <img
                  src="/ceo.png"
                  alt="Maj Rizwan Khan Naru (R)"
                  className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
                />
              </div>
              <div className="flex-1">
                <div className="absolute -top-10 -left-10 text-9xl text-[#0A1A44]/5 font-serif hidden md:block">“</div>
                <p className="text-xl italic text-[#0A1A44] leading-relaxed relative z-10 mb-6 font-serif">
                  “True business success is not just about profits measured in numbers but, about how those numbers are achieved. Our strategy reflects our commitment to sustainable business practices and balancing responsibility alongside growth.”
                </p>
                <div className="flex items-center gap-4 border-l-4 border-[#A13A32] pl-6">
                  <div>
                    <h4 className="text-xl font-bold text-[#0A1A44]">Maj Rizwan Khan Naru (R)</h4>
                    <p className="text-[#A13A32] font-semibold uppercase tracking-widest text-sm">CEO, HSN Security Services (Pvt) Ltd</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100"
            >
              <h3 className="text-3xl font-black text-[#0A1A44] mb-6">Our Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                HSN Security Services private Limited was established in 2009. Today by the grace of Allah and with the support of our valued clients, we now have over hundreds of guards in all over Sindh and Punjab and we are expanding more.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl text-center">
                    <div className="text-3xl font-bold text-[#A13A32]">{stat.number}</div>
                    <div className="text-xs uppercase font-extrabold tracking-widest text-[#0A1A44] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0A1A44] mb-4 uppercase tracking-tighter">Introduction</h2>
            <div className="w-24 h-1 bg-[#A13A32] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                HSN Pvt. Ltd. is a professional Total Security Solutions and Risk Management Organization. We provide innovative and strategic security-based business solutions and specialized services customized to minimize loss.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Backed by a network of trained personnel, our operations are supported by a 24x7 control room, proactive operations team, and a dynamic corporate infrastructure. HSN is a 100% government statutes compliant organization.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex gap-6">
                <div className="bg-[#0A1A44] text-white p-4 rounded-2xl h-fit">
                  <FaUsers size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0A1A44] mb-2">Talent Pool</h4>
                  <p className="text-gray-500">The area of specialization is well demarcated and appropriately assigned to respective experts for compliance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#A13A32] text-white p-4 rounded-2xl h-fit">
                  <FaShieldAlt size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0A1A44] mb-2">Succession Planning</h4>
                  <p className="text-gray-500">Effortless transition takes place in case of any key employee resignations, ensuring continuity of service.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Direction */}
      <section className="py-24 px-4 bg-[#0A1A44] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Strategic Direction</h2>
            <div className="w-24 h-1 bg-[#A13A32] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-[2rem] backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-2xl font-bold text-[#E1B546] mb-8 flex items-center gap-3">
                <FaStar /> Short Term Goals
              </h3>
              <ul className="space-y-4">
                {strategicShortTerm.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[#A13A32] rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-[2rem] backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-2xl font-bold text-[#A13A32] mb-8 flex items-center gap-3">
                <FaGlobe /> Long Term Vision
              </h3>
              <ul className="space-y-4">
                {strategicLongTerm.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[#E1B546] rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0A1A44] to-[#0A1A44]/90 p-12 rounded-[2.5rem] text-white shadow-2xl"
            >
              <h3 className="text-3xl font-black mb-6 uppercase tracking-widest">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90 font-medium">
                HSN is in the business of providing multi-disciplinary Physical security management services of the highest standard. We ensure protection and loss prevention with latest technology. We offer conducive working conditions and good career prospects for everyone who contributes to it.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-12 rounded-[2.5rem] text-[#0A1A44]"
            >
              <h3 className="text-3xl font-black mb-6 uppercase tracking-widest">Our Credentials</h3>
              <p className="text-lg leading-relaxed text-gray-600 font-medium">
                Since 2009 HSN has been partnering with clients and industry to provide strategic safety and security services that mitigate risk and minimize loss. Today we proudly contribute to the organized Pakistan security market, complying with all statutory requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications (using user images as placeholders/references) */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0A1A44] mb-4 uppercase tracking-tighter">Certifications</h2>
            <div className="w-24 h-1 bg-[#E1B546] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200">
              <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-400 font-bold overflow-hidden">
                <img src="/certification_1.png" alt="License 1" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-center text-sm font-bold text-[#0A1A44] uppercase tracking-widest">Sindh License</p>
            </div>
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200">
              <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-400 font-bold overflow-hidden">
                <img src="/certification_2.png" alt="License 2" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-center text-sm font-bold text-[#0A1A44] uppercase tracking-widest">Punjab License</p>
            </div>
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200">
              <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-400 font-bold overflow-hidden">
                <img src="/certification_3.png" alt="License 3" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-center text-sm font-bold text-[#0A1A44] uppercase tracking-widest">PTA License</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-[#0A1A44] mb-6">Our Licenses</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <FaCheckCircle className="text-[#A13A32]" />
                    <span className="text-sm font-bold text-gray-700">{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#0A1A44] mb-6">Process & Training</h4>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h5 className="font-bold text-[#0A1A44] mb-2">Back Ground Scanning</h5>
                  <p className="text-sm text-gray-500">Guards are enrolled on merit after proper scrutiny and scrutiny of background.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h5 className="font-bold text-[#0A1A44] mb-2">Mental & Physical Training</h5>
                  <p className="text-sm text-gray-500">Requisite training facilities to enhance the capacity of every security guard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0A1A44] to-[#A13A32] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Ready to Partner?</h2>
            <p className="text-xl mb-10 opacity-90">
              Join hundreds of satisfied clients across Sindh and Punjab.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#E1B546] text-[#0A1A44] px-10 py-5 rounded-full font-black text-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}