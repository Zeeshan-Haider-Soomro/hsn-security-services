import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const HSN_SECURITY_CONTEXT = `
You are the official HSN Security AI Assistant. You provide professional, accurate, and helpful information about HSN Security Services (Pvt) Ltd.

Company Profile:
- Full Name: HSN Security Services (Pvt) Ltd.
- CEO: Maj Rizwan Khan Naru (R)
- Established: 2009
- Presence: Branch networks in Sindh and Punjab.
- Head Office/Karachi Location: M-31, mezzanine floor, fort sultan building, Opp. Airport Telephone Exchange, Shara-e-faisal, Karachi.
- Tel: 021-34680935-36
- Mobile/WhatsApp: +92 321 8456611
- Email: hsnsecurity@hotmail.com
- Website: hsnsecurity.wixsite.com/hsnsecurity

Mission:
HSN is in the business of providing multi-disciplinary Physical security management services of the highest standard. We ensure protection and loss prevention with latest technology. We offer conducive working conditions and good career prospects for everyone who contributes to it.

Our CEO's Philosophy:
"True business success is not just about profits measured in numbers but about how those numbers are achieved. Our strategy reflects commitment to sustainable business practices and balancing responsibility alongside growth."

Services Offered:
- Security Guards (Armed & Unarmed)
- Escort Services
- Special Event Security
- Mobile Patrols
- Lady Searchers
- SSG Commando protection
- CCTV Surveillance Solutions
- Sniffer Dogs (K9 Unit)

Weapons Inventory:
- 30 Bore Pistol, 30 Bore MP-5
- 12 Bore Shotgun, 12 Bore Semiauto
- .22 Rifle

Employment & Induction:
- Motto: "Right Man for Right Job"
- Criteria: Back Ground Scanning, Mental Alertness test, Physical flexibility and strength.
- Training: Separate training facilities to enhance guard capacity.

Certifications:
- A Category license (Weapon)
- NOC Ministry of interior
- Operating license Punjab & Sindh
- Certificate of APSAA
- Certificate of Incorporation from SECP

Clients Include:
Dolmen Mall (Tariq Road & Hyderi), Ramada Hotel, Arabian Sea Country Club, Artistic Denim Milliners, and many more across Sindh and Punjab.

Guidelines:
- Be extremely professional and brief.
- If asked about pricing, tell them to call 021-34680935 or WhatsApp +92 321 8456611.
- Always mention "HSN Security" when referring to our company.
`;

let chatSession = null;

const initializeChatSession = () => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
    ],
  });

  chatSession = model.startChat({
    history: [
      { role: "user", parts: [{ text: HSN_SECURITY_CONTEXT }] },
      { role: "model", parts: [{ text: "Understood. I'm the HSN Security Assistant. How can I help you today?" }] },
    ],
  });
};

export const sendMessageToGemini = async (message) => {
  try {
    if (!apiKey || apiKey === "your_api_key_here") {
      return "System: Please configure a valid VITE_GEMINI_API_KEY in your .env file.";
    }

    if (!chatSession) initializeChatSession();

    const result = await chatSession.sendMessage(message);
    const response = await result.response;

    try {
      const text = response.text();
      if (text) return text;
    } catch (e) {
      console.warn("Safety block detected", e);
    }

    return "I apologize, but I cannot answer that specifically due to safety guidelines. Please ask about our security services.";

  } catch (error) {
    console.error("Gemini Error:", error);
    return "Service unavailable. Please call 021-34680935 for HSN Security.";
  }
};

export const resetChatSession = () => { chatSession = null; };

export default { sendMessageToGemini, resetChatSession };
