import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Briefcase, Target, StarIcon } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap className="text-primary" size={28} />,
    title: "Education",
    detail: (
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        <li>
          <span className="font-semibold text-foreground">University / Institute</span><br />
          🔹 NIBM - KIC<br />
          BSc (Hons) Computer Science with Artificial Intelligence (UG)
        </li>
        <li>
          <span className="font-semibold text-foreground">University / Institute</span><br />
          🔹 C- Clarke International Institute<br />
          Following a Software Engineering and AI course
        </li>
        <li>
          <span className="font-semibold text-foreground">School</span><br />
          🔹 Pinnawala Central College, Rambukkana
        </li>
      </ul>
    ),
  },
  {
    icon: <Briefcase className="text-primary" size={28} />,
    title: "Experience",
    detail: (
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        <li>
          <span className="font-semibold text-foreground">2025</span><br />
          🔹 Web Application
        </li>
        <li>
          <span className="font-semibold text-foreground">2025</span><br />
          🔹 UI Design Practice Projects
        </li>
        <li>
          <span className="font-semibold text-foreground">2026 – Present</span><br />
          🔹 Building Machine Learning Models
        </li>
        <li>
          <span className="font-semibold text-foreground">2026 – Present</span><br />
          🔹 Creating a website combined with a Machine Learning Model
        </li>
      </ul>
    ),
  },
  {
    icon: <Target className="text-primary" size={28} />,
    title: "Skills",
    detail: (
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        <li>
          <span className="font-semibold text-foreground">Web Development</span><br />
          🔹 HTML, CSS, JavaScript, React
        </li>
        <li>
          <span className="font-semibold text-foreground">Machine Learning</span><br />
          🔹 Python, Scikit-learn
        </li>
        <li>
          <span className="font-semibold text-foreground">UI Design</span><br />
          🔹 Figma
        </li>
      </ul>
    ),
  },
  {
    icon: <StarIcon className="text-primary" size={28} />,
    title: "Go-tos",
    detail: (
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        <li>
          <span className="font-semibold text-foreground">AI Tools</span><br />
          🔹 ChatGPT<br />
          🔹 Gemini<br />
          🔹 Claude<br />
          🔹 Perplexity<br />
          🔹 Lovable AI<br />
          🔹 Antigravity AI<br />
          🔹 Grok AI
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = highlights[activeTab];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
            I'm a developer who loves turning ideas into reality. I enjoy working across the stack — from crafting beautiful interfaces to training machine learning models.
          </p>
        </ScrollReveal>

        {/* Tab Buttons */}
        <div className="flex overflow-x-auto justify-start sm:justify-center gap-2 sm:gap-4 mb-8 px-2 pb-1 scrollbar-hide">
          {highlights.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setActiveTab(i)}
              className={`flex-shrink-0 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${activeTab === i
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-card text-muted-foreground border-border hover:border-primary hover:text-foreground"
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <ScrollReveal key={activeTab}>
          <div className="bg-card rounded-xl p-5 sm:p-8 card-shadow w-full sm:max-w-lg mx-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-secondary flex items-center justify-center mb-4 sm:mb-5">
              {active.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{active.title}</h3>
            {active.detail && active.detail}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
