import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import VideoHero from "../components/VideoHero";
import { sendContactEmail } from "../services/emailService";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An unexpected error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Karachi Office",
      content: "M-31, mezzanine floor, fort sultan building, Opp. Airport Telephone Exchange, Shara-e-faisal, Karachi",
    },
    {
      icon: FaPhone,
      title: "Telephones",
      content: "021-34680935-36",
      link: "tel:02134680935",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "hsnsecurity@hotmail.com",
      link: "mailto:hsnsecurity@hotmail.com",
    },
    {
      icon: FaClock,
      title: "Operational Status",
      content: "24/7 Command & Control",
    },
  ];

  return (
    <div className="bg-white">
      <VideoHero
        imageSrc="/hero_contact.png"
        title="Contact Us"
        subtitle="Get in touch for specialized security solutions and tactical assessments"
        height="h-screen"
      />

      <section className="py-24 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100"
            >
              <h3 className="text-3xl font-black text-[#0A1A44] mb-8 uppercase tracking-tighter">
                Request a Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl focus:outline-none focus:border-[#0A1A44] transition-all font-bold text-[#0A1A44] ${errors.name ? "border-red-400" : "border-transparent"}`}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl focus:outline-none focus:border-[#0A1A44] transition-all font-bold text-[#0A1A44] ${errors.email ? "border-red-400" : "border-transparent"}`}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl focus:outline-none focus:border-[#0A1A44] transition-all font-bold text-[#0A1A44] ${errors.phone ? "border-red-400" : "border-transparent"}`}
                      placeholder="Your phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl focus:outline-none focus:border-[#0A1A44] transition-all font-bold text-[#0A1A44] resize-none ${errors.message ? "border-red-400" : "border-transparent"}`}
                    placeholder="Describe your security needs..."
                  ></textarea>
                </div>

                {submitStatus && (
                  <div className={`p-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] text-center ${submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A13A32] hover:bg-[#0A1A44] text-white font-black py-5 px-8 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(161,58,50,0.3)] disabled:opacity-50 uppercase tracking-widest"
                >
                  {isSubmitting ? "Submitting..." : "Send Request"}
                </button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="text-3xl font-black text-[#0A1A44] mb-8 uppercase tracking-tighter">
                  Contact Details
                </h3>
                <div className="grid gap-6">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start gap-6"
                    >
                      <div className="bg-[#0A1A44] text-white p-4 rounded-2xl">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A13A32] mb-1">{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} className="text-xl font-semibold text-[#0A1A44] hover:text-[#A13A32] transition-colors">{info.content}</a>
                        ) : (
                          <p className="text-xl font-semibold text-[#0A1A44] leading-tight">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="bg-[#0A1A44] p-10 rounded-[2.5rem] text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A13A32]/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#A13A32]/40 transition-colors"></div>
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter relative z-10">Why HSN Security?</h4>
                <ul className="space-y-4 relative z-10">
                  {["100s of guards in Sindh & Punjab", "A-Category Weapon License", "Back Ground Scanning Guaranteed", "24/7 Command Center Support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#A13A32] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.313935222271!2d67.14075841447814!3d24.88726925029584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea3d5ca7523%3A0xe484f66a076e3952!2sFort%20Sultan!5e0!3m2!1sen!2s!4v1625576789012!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="HSN Security Location"
        ></iframe>
      </section>
    </div>
  );
}