import styles from "./ProjectsStyles.module.css";
import Todo from "../../assets/Todo.png";
import weather from "../../assets/weatherapp.png";
import ProjectCards from "../../Common/ProjectCards";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCards
          src={Todo}
          p="Todo App"
          link="https://kiranjithhardeepp.github.io/Todoapp-ReactJS/"
        />
        <ProjectCards
          src={weather}
          p="Weather APP"
          link="https://kiranjithhardeepp.github.io/WheatherApp-React/"
        />
      </div>
    </section>
  );
}

export default Projects;
