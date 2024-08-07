import styles from "./ProjectsStyles.module.css";
import Todo from "../../assets/Todo.png";
import weather from "../../assets/weatherapp.png";
import Trans from "../../assets/Transaction.png";
import netflix from "../../assets/netflix.png";
import ProjectCards from "../../Common/ProjectCards";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCards
          src={netflix}
          p="Netflix Clone"
          link="https://netfflixclone.onrender.com/"
          gitLink="https://github.com/kiranjithhardeepp/NetfFlixClone"
        />
        <ProjectCards
          src={Trans}
          p="Transaction-Mern"
          link="https://frontent-log-mern.onrender.com/"
          gitLink="https://github.com/kiranjithhardeepp/login_mern"
        />
        <ProjectCards
          src={Todo}
          p="Todo App"
          link="https://kiranjithhardeepp.github.io/Todoapp-ReactJS/"
          gitLink="https://github.com/kiranjithhardeepp/Todoapp-ReactJS"
        />
        <ProjectCards
          src={weather}
          p="Weather APP"
          link="https://kiranjithhardeepp.github.io/WheatherApp-React/"
          gitLink="https://github.com/kiranjithhardeepp/WheatherApp-React"
        />
      </div>
    </section>
  );
}

export default Projects;
