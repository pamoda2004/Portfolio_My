import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: "💻", title: "Web Development", desc: "Building responsive and modern websites using HTML, CSS, and JavaScript." },
  { icon: "⚛️", title: "React Development", desc: "Building dynamic web pages using React (Basics)." },
  { icon: "🎯", title: "ML Model Building", desc: "Creating and training machine learning models for data analysis and predictions." },
  { icon: "✨", title: "Figma Design", desc: "Creating user-friendly interfaces with comfortable design and smooth experience." },
  { icon: "☕", title: "Java Development", desc: "Developing robust and scalable applications using Java programming language." },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          My <span className="text-gradient">Services</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          What I can offer to help bring your ideas to life.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 h-full flex flex-col gap-3">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

