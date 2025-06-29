import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaWhatsapp as FaWhatsappIcon,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    id: 1,
    icon: <FaEnvelope size={24} />,
    title: "Email",
    description: "mahmudulhasan3527@gmail.com",
    buttonText: "Email Me",
    buttonLink: "mahmudulhasan3527@gmail.com",
    buttonIcon: <FaPaperPlane size={16} />,
  },
  {
    id: 2,
    icon: <FaPhone size={24} />,
    title: "Phone",
    description: "+8801798916082",
    buttonText: "Call Now",
    buttonLink: "tel:+8801798916082",
    buttonIcon: <FaPhoneAlt size={16} />,
  },
  {
    id: 3,
    icon: <FaWhatsapp size={24} />,
    title: "WhatsApp",
    description: "Available for instant messaging",
    buttonText: "WhatsApp",
    buttonLink: "https://wa.me/8801798916082",
    buttonIcon: <FaWhatsappIcon size={16} />,
  },
  {
    id: 4,
    icon: <FaMapMarkerAlt size={24} />,
    title: "Location",
    description: " Dhaka, Bangladesh",
  },
  {
    id: 5,
    icon: <FaClock size={24} />,
    title: "Availability",
    description: "Open for freelance projects and collaborations",
  },
  {
    id: 6,
    icon: <FaCalendarAlt size={24} />,
    title: "Best Time to Reach",
    description: "10:00 AM – 6:00 PM (GMT+6)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactMethods = () => {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#CAE8BD" }}
      className="py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
        Contact Methods
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contacts.map(
          ({
            id,
            icon,
            title,
            description,
            buttonText,
            buttonLink,
            buttonIcon,
          }) => (
            <motion.div
              key={id}
              className="bg-[#ECFAE5] rounded-lg p-6 flex flex-col gap-4 shadow-lg border border-gray-300"
              variants={cardVariants}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-tr from-green-400 to-green-600 text-white">
                  {icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
              </div>
              <p className="text-gray-700 pl-14">{description}</p>
              {buttonText && buttonLink && (
                <a
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn btn-outline hover:bg-[#d4ecc7] transition "
                >
                  {buttonText}
                  {buttonIcon && <span>{buttonIcon}</span>}
                </a>
              )}
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
};

export default ContactMethods;
