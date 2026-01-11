// CCTVMonitoringSection.jsx
import { FaCamera } from "react-icons/fa6";

const CCTVMonitoringSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            24/7 CCTV Monitoring & Control
          </h2>
          <p className="text-gray-600 mb-4">
            Our monitoring team ensures continuous real-time surveillance to protect your
            business or property against theft, suspicious activity, and emergencies.
          </p>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-center gap-2">
              <FaCamera className="text-green-600" /> Live surveillance feed monitoring
            </li>
            <li className="flex items-center gap-2">
              <FaCamera className="text-green-600" /> Emergency response alerts
            </li>
            <li className="flex items-center gap-2">
              <FaCamera className="text-green-600" /> Video recording storage
            </li>
          </ul>
        </div>

        <div>
          <img
            src="/images/cctv-monitor.jpg"
            className="rounded-xl shadow-lg"
            alt="CCTV Monitoring"
          />
        </div>
      </div>
    </section>
  );
};

export default CCTVMonitoringSection;
