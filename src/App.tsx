import Nav from "./components/Nav";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Project from "./components/section/Project";
import Blog from "./components/section/Blog";
import Skill from "./components/section/Skill";
import Experience from "./components/section/Experience";
import { useSelector } from "react-redux";
import { stateReduxType } from "./redux/store";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef, useEffect, useState } from "react";
AOS.init();

const getDimensions = (ele: any) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele: any) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const App: React.FC = () => {
  const handleThemeChanged = () => (toggleTheme ? "white-mode" : "dart-mode");
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);


  const [visibleSection, setVisibleSection] = useState<any>();
  const headerRef = useRef<null>(null);
  const HomeRef = useRef<null>(null);
  const AboutRef = useRef<null>(null);
  const ExperienceRef = useRef<null>(null);
  const ProjectRef = useRef<null>(null);
  const BlogRef = useRef<null>(null);
  const SkillRef = useRef<null>(null);

  const sectionRefs = [
    { section: "Home", ref: HomeRef },
    { section: "About", ref: AboutRef },
    { section: "About", ref: ExperienceRef },
    { section: "Project", ref: ProjectRef },
    { section: "Skill", ref: SkillRef },
    { section: "Blog", ref: BlogRef },
  ];


  useEffect((): any => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = (window.scrollY + 300) + headerHeight;

      const selected = sectionRefs.find(({ _, ref }: any) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <div className={handleThemeChanged()}>
      <header>
        <Nav headerRef={headerRef}
          scrollTo={scrollTo}
          HomeRef={HomeRef}
          AboutRef={AboutRef}
          ExperienceRef={ExperienceRef}
          ProjectRef={ProjectRef}
          SkillRef={SkillRef}
          BlogRef={BlogRef}
          visibleSection={visibleSection} />
      </header>
      <section className={handleThemeChanged()} id="Home" ref={HomeRef}>
        <Home />
      </section>
      <section className={handleThemeChanged()} id="About" ref={AboutRef}>
        <About />
      </section>
      <section className={handleThemeChanged()} id="Experience" ref={ExperienceRef} style={{ height: "200vh" }}>
        <Experience />
      </section>
      <section className={handleThemeChanged()} id="Project" ref={ProjectRef} style={{ height: "auto" }}>
        <Project />
      </section>
      <section className={handleThemeChanged()} id="Skill" ref={SkillRef} style={{ height: "auto" }}>
        <Skill />
      </section>
      <section className={handleThemeChanged()} id="Blog" ref={BlogRef}>
        <Blog />
      </section>
    </div>
  );
};

export default App;
