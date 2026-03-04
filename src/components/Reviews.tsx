const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      text: "Kevin is an exceptional developer. His attention to detail and ability to solve complex problems is impressive.",
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      text: "A pleasure to work with. He delivers clean, maintainable code and always meets deadlines.",
    },
    {
      name: "David Smith",
      role: "Startup Founder",
      text: "The e-commerce site Kevin built for us increased our conversion rate by 40%. Highly recommended!",
    }
  ];

  return (
    <div id="reviews">
      <div className="container">
        <h1 className="sub-title">Client Reviews</h1>
        <div className="review-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p>"{review.text}"</p>
              <h4>- {review.name}, <span>{review.role}</span></h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
