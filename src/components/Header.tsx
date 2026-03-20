import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "SOFTWARE DEVELOPER",
    "UI/UX DESIGNER",
    "FULL STACK DEVELOPER",
    "PROBLEM SOLVER",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div
      id="header"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(8,8,8,1)), url(/IMG/header.png)",
      }}
    >
      <div className="container">
        <Navbar />
        <div className="header-content">
          <div className="header-glass-card">
            <p className="role-text">
              <span>{text}</span>
              <span className="cursor">|</span>
            </p>
            <h1>
              Hello, I'm <span>Kevin</span>
              <br />
              Wairimu
            </h1>
            <p className="hero-desc">
              Crafting digital experiences that blend functionality with
              aesthetic excellence.
            </p>
            <div className="header-btns">
              <a href="#portfolio" className="btn btn-primary">
                My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
