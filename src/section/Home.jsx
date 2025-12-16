import React, { useState, useEffect, useMemo } from "react";
import ParticlesBackground from "../component/ParticlesBackground";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import avatar from '../assets/avator.png';

const socials = [
  { Icon: FaGithub, label: "Github", href: "https://github.com/MadhavVashisht" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/madhav-vashisht/" },
  // { Icon: FaXTwitter, label: "X", href: "" },
];

const glowVariant = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter: "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 1239, 0.8))",
    transition: { duration: 0.3, yoyo: Infinity, ease: "easeInOut" }
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
};

export default function Home() {
  // --- ROLES CONFIGURATION ---
  const roles = useMemo(() => [
    "Web Developer",
    "Software Developer",
    "Tech Enthusiast",
  ], []);

  const [roleIndex, setRoleIndex] = useState(0);
  const [roleSubIndex, setRoleSubIndex] = useState(0);
  const [roleDeleting, setRoleDeleting] = useState(false);

  // --- EFFECT: ROLES TYPING ONLY ---
  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (!currentRole) return;

    const timeout = setTimeout(() => {
      if (!roleDeleting && roleSubIndex < currentRole.length) {
        setRoleSubIndex(v => v + 1);
      }
      else if (!roleDeleting && roleSubIndex === currentRole.length) {
        setTimeout(() => setRoleDeleting(true), 1200);
      }
      else if (roleDeleting && roleSubIndex > 0) {
        setRoleSubIndex(v => v - 1);
      }
      else if (roleDeleting && roleSubIndex === 0) {
        setRoleDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, roleDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [roleSubIndex, roleDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />
      
      {/* Background Gradient Blobs */}
      <div className="pointer-events-none">
        <div className="absolute inset-0"></div>
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            
            {/* Roles Typewriter */}
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em] mb-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>
                {roles[roleIndex]?.substring(0, roleSubIndex)}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Static Name Header */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hello, I'm
              <br />
              <span className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap">
                Madhav Vashisht
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I’m a tech-driven builder who turns ideas into clean, scalable digital products, blending engineering logic with sharp design thinking. From web platforms to automation and emerging tech, I focus on shipping real-world solutions that actually move the needle.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#projects"
                className="px-6 py-3 font-medium text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] rounded-full shadow-lg hover:scale-105 transition-all">
                View My Work
              </a>
              <a href="/Madhav_Vashisht_Resume.pdf"
                download
                className="px-6 py-3 font-medium text-black bg-white hover:bg-gray-200 rounded-full shadow-lg hover:scale-105 transition-all">
                My Resume
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariant}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Content (Image & Glow) */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Glow Effect */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              filter: "blur(100px)",
              opacity: 0.4,
              background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"
            }}
          />
          
          <motion.img 
            src={avatar} 
            alt="MadhavVashisht"
            className="relative z-10 object-contain select-none pointer-events-none"
            style={{ width: "min(45vw, 780px)", maxHeight: "90vh" }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>

      </div>
    </section>
  );
}