const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="copyright">
      <p>
        Copyright © {currentYear} <span>Kevin Wairimu</span>.
      </p>
    </footer>
  );
};

export default Footer;
