import ScrollReveal from "./ScrollReveal";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/web.jpg";
import project2 from "@/assets/figma.jpg";
import project3 from "@/assets/ML.jpg";

const projects = [
  {
    title: "Tourist Guide Website",
    description: "Creating a six-page responsive website using ML as part of the design",
    image: project1,
    tags: ["Html", "Css", "JavaScript", "Python", "FastAPI"],
    demo: "https://my-travel-website-xooa.vercel.app/",
  },
  {
    title: "UI/UX Design",
    description: "Design layout for web pages for a furniture store",
    image: project2,
    tags: ["Figma"],
    demo: "https://www.figma.com/design/ewbGube1ktVrT10ztcMZFH/Project__2?node-id=0-1&t=rRUjnIF9fuMYMyab-1",
  },
  {
    title: "Machine Learning Model",
    description: "Choosing the vehicle of your choice that best suits your budget.",
    image: project3,
    tags: ["FlaskAPI", "Python", "CSS Grid"],
    demo: "https://vehicle-mlmodel.vercel.app/",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-14">
          A selection of projects I've built and contributed to.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.15}>
            <div className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 group h-full flex flex-col">
              <div className="overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
