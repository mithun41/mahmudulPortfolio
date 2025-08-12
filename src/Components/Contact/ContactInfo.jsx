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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contacts = [
  {
    id: 1,
    icon: <FaEnvelope size={24} />,
    title: "Email",
    description: "mahmudulhasan3527@gmail.com",
    buttonText: "Email Me",
    buttonLink:
      "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new",
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactMethods = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // so animation triggers every time in view
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen py-20 px-6 md:px-20"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16 text-cyan-400 tracking-wide">
        Contact Methods
      </h2>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
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
              className="bg-gray-800 bg-opacity-60 border border-cyan-700 rounded-3xl p-6 flex flex-col gap-5 shadow-xl"
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 15px rgba(6,182,212,0.5)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white">
                  {icon}
                </div>
                <h3 className="font-semibold text-xl text-gray-300">{title}</h3>
              </div>
              <p className="text-gray-300 pl-14">{description}</p>
              {buttonText && buttonLink && (
                <a
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-xl border border-cyan-600 text-cyan-400 hover:bg-cyan-500 hover:text-white transition font-semibold justify-center"
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
