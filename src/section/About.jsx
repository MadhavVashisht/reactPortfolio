import { motion } from "framer-motion";
import p from "../assets/p.jpeg";
import { div } from "framer-motion/client";

export default function About() {
  const stats = [
    { label: "Experience", value: "1+ years" },
    { label: "Speciality", value: "Full-Stack Engineering" },
    { label: "Focus", value: "Product Experience" },
  ];

  const Glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] ",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {Glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img src={p} alt="profile pic" className="absolute inset-0" />
          </motion.div>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
            bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
            >
              Madhav Vashisht
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I build scalable, performance-driven web applications with a sharp
              eye for design and user experience. From clean frontends to
              rock-solid backends, I turn ideas into production-ready products.
              Always experimenting, always shipping, and always optimizing for
              impact.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#Projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View Projects
              </a>
              <a
                href="#Contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6}}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">About Me</h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I’m a Full-Stack Engineer who builds clean, scalable, and
            performance-driven web applications. I focus on strong architecture,
            modern UI, and seamless user experiences that feel fast and
            reliable.
          </p>
          <p className="mt-4 text-gray-300 text-base sm:text-lg" >
            I enjoy turning ideas into polished digital products—balancing
            design, engineering, and usability. My goal is to ship work that not
            only functions well but also leaves a lasting impression.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
