"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.2, once: true });
  const headingControls = useAnimation();
  const formControls = useAnimation();

  useEffect(() => {
    if (!inView) return;
    (async () => {
      await headingControls.start("visible");
      await formControls.start("visible");
    })();
  }, [inView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    console.log("Form submitted:", formData);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
      },
    }),
    []
  );

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
  };

  const inputBaseClasses =
    "w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0099FF] focus:border-[#0099FF]";

  return (
    <div ref={sectionRef} className="min-h-screen  text-white px-4 py-16">
      <motion.div className="flex justify-center mb-8" variants={headerVariants} initial="hidden" animate={headingControls}>
        <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-gray-300">Contacts</div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div className="space-y-8 text-center lg:text-left" variants={headerVariants} initial="hidden" animate={headingControls}>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ask whatever you have
              <br /> in your mind
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Whether you have questions or are ready to discuss your business, we're here to help. Reach out today.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <Mail className="w-6 h-6 text-gray-400" />
              <span className="text-lg text-gray-300">noloopstech@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <Phone className="w-6 h-6 text-gray-400" />
              <span className="text-lg text-gray-300">9863796211</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <MapPin className="w-6 h-6 text-gray-400" />
              <span className="text-lg text-gray-300">Kathmandu, Nepal</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-8 border border-gray-800/50" variants={formVariants} initial="hidden" animate={formControls}>
          <motion.div className="space-y-6">
            <motion.div variants={fieldVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Sabin Adhikari" className={`${inputBaseClasses} ${errors.name ? 'border-red-500' : 'border-gray-700'}`} />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </motion.div>

            <motion.div variants={fieldVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="sabinadhikari@gmail.com" className={`${inputBaseClasses} ${errors.email ? 'border-red-500' : 'border-gray-700'}`} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </motion.div>

            <motion.div variants={fieldVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleInputChange} placeholder="Hi, I am reaching out for..." className={`${inputBaseClasses} ${errors.message ? 'border-red-500' : 'border-gray-700'} resize-none`} />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </motion.div>

            <motion.button type="button" onClick={handleSubmit} variants={fieldVariants} className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-[#0099FF] focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-[1.02]">
              Submit
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
