import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import TypingAnimation from "./TypingAnimation";
import profileImg from "@/assets/img.jpeg";
import cvFile from "@/assets/cv (2).pdf";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-foreground">
            Hi, I'm <span className="text-gradient">Pamoda Jayathilaka</span>
          </h1>
          <div className="text-xl sm:text-2xl font-medium mb-6 min-h-[2rem]">
            <TypingAnimation />
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Passionate about building elegant digital experiences and solving real-world problems through code and machine learning.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href={cvFile}
              download="Pamoda_Jayathilaka_CV.pdf"
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden card-shadow ring-4 ring-border">
              <img
                src={profileImg}
                alt="Pamoda Jayathilaka – Developer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-hero-gradient rounded-2xl animate-float opacity-60" />
            <div className="absolute -top-4 -left-4 w-14 h-14 bg-secondary rounded-xl animate-float opacity-80" style={{ animationDelay: "1s" }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden lg:flex justify-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
