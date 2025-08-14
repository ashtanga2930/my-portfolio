import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Palette,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="relative group cursor-pointer"
              >
                {item.name}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              style={{
                background: "linear-gradient(45deg, #8B5CF6, #EC4899, #06B6D4)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradient 3s ease infinite",
              }}
            >
              Creative Developer
            </motion.h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            I craft beautiful digital experiences with code and creativity.
            <br />
            Welcome to my digital playground.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12"
          >
            {/* About Me Button */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="/about"
                className="relative block px-12 py-6 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-2xl font-bold text-xl overflow-hidden group"
                whileHover={{
                  boxShadow:
                    "0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(236, 72, 153, 0.4)",
                }}
              >
                {/* Sparkle particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                  />
                ))}

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: "100%",
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                />

                {/* Button content */}
                <div className="relative z-10 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code size={28} />
                  </motion.div>
                  <span>About Me</span>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-pink-400/0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 -z-10"
                whileHover={{
                  opacity: 0.3,
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>

            {/* Projects Button */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="/projects"
                className="relative block px-12 py-6 bg-gradient-to-r from-pink-600 via-pink-500 to-purple-500 rounded-2xl font-bold text-xl overflow-hidden group"
                whileHover={{
                  boxShadow:
                    "0 0 40px rgba(236, 72, 153, 0.8), 0 0 80px rgba(139, 92, 246, 0.4)",
                }}
              >
                {/* Sparkle particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                  />
                ))}

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: "100%",
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                />

                {/* Button content */}
                <div className="relative z-10 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Palette size={28} />
                  </motion.div>
                  <span>My Projects</span>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/20 to-purple-400/0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl opacity-0 -z-10"
                whileHover={{
                  opacity: 0.3,
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          </motion.div>

          {/* Secondary Contact Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-400/50 rounded-full font-semibold text-lg hover:bg-purple-400/20 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 left-10 hidden lg:block"
        >
          <Code size={48} className="text-purple-400/30" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/3 right-10 hidden lg:block"
          style={{ animationDelay: "2s" }}
        >
          <Palette size={48} className="text-pink-400/30" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-1/4 left-1/4 hidden lg:block"
          style={{ animationDelay: "4s" }}
        >
          <Zap size={48} className="text-cyan-400/30" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          cursor: none;
        }
        
        a, button {
          cursor: none;
        }
      `}</style>
    </div>
  );
}
