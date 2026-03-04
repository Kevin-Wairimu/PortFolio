const Services = () => {
  const servicesData = [
    {
      icon: "fa-solid fa-code",
      title: "Web Design",
      desc: "Creating visually stunning and highly functional websites tailored to your brand. Focusing on responsive layouts and modern aesthetics.",
    },
    {
      icon: "fa-solid fa-crop-simple",
      title: "UI/UX Design",
      desc: "Designing intuitive and engaging user experiences through clean interfaces and user-centered design principles.",
    },
    {
      icon: "fa-brands fa-adn",
      title: "App Design",
      desc: "Crafting modern and responsive mobile application interfaces for various platforms, ensuring a seamless user journey.",
    },
  ];

  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list-enhanced">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">
                <i className={service.icon}></i>
              </div>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              {/* <a href="#contact" className="service-link">Learn more <i className="fa-solid fa-arrow-right"></i></a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
