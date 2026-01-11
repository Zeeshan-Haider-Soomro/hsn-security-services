import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

// Send contact form email
export const sendContactEmail = async (formData) => {
    try {
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            throw new Error("EmailJS is not configured. Please add credentials to .env.local file.");
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject || "Contact Form Submission",
            message: formData.message,
            to_name: "HSN Security Team",
        };

        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        return {
            success: true,
            message: "Your message has been sent successfully! We'll get back to you soon.",
            response,
        };
    } catch (error) {
        console.error("Error sending email:", error);

        return {
            success: false,
            message: error.message || "Failed to send message. Please try again or contact us directly.",
            error,
        };
    }
};

export default {
    sendContactEmail,
};
