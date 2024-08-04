import React from "react";
import styles from "./cardStyles.module.css";
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import { useTheme } from '../Common/ThemeContext';

function ProjectCards({ src, link, p, gitLink }) {
  const { theme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={src} className={styles.cardimg} alt={`${p} logos`} />
        <p>{p}</p>
      </a>
      <a href={gitLink} target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub icon" className={styles.gitImg} />
      </a>
    </div>
  );
}

export default ProjectCards;
