import "./Recomendation.css";

function Recomendation() {
  const topTags = [
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
  ];
  const bottomTags = [
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
    "НАЗВА НАБОРУ",
  ];
  const images = [
    "/recomendation1.jpg",
    "/recomendation2.jpg",
    "/recomendation3.jpg",
    "/recomendation4.jpg",
    "/recomendation5.jpg",
    "/recomendation6.jpg",
  ];

  return (
    <section className="recomendation">
    <h2 className="recomendation-title">ДОДАТКОВІ РЕКОМЕНДАЦІЇ</h2>
    <div className="recomendation-tags">
      {topTags.map((tag, index) => (
        <span className="recomendation-tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
    <div className="recomendation-grid">
      <div className="recomendation-item">
        <div className="recomendation-card recomendation-card-1">
          <img src={images[0]} alt="Рекомендація 1" />
          <div className="recomendation-arrow">↗</div>
        </div>
        <p className="recomendation-name">НАЗВА НАБОРУ</p>
      </div>
      <div className="recomendation-item">
        <div className="recomendation-card recomendation-card-2">
          <img src={images[1]} alt="Рекомендація 2" />
          <div className="recomendation-arrow">↗</div>
        </div>
        <p className="recomendation-name">НАЗВА НАБОРУ</p>
      </div>
      <div className="recomendation-item">
        <div className="recomendation-card recomendation-card-3">
          <img src={images[2]} alt="Рекомендація 3" />
          <div className="recomendation-arrow">↗</div>
        </div>
        <p className="recomendation-name">НАЗВА НАБОРУ</p>
      </div>
      <div className="recomendation-item">
        <div className="recomendation-card recomendation-card-4">
          <img src={images[3]} alt="Рекомендація 4" />
          <div className="recomendation-arrow">↗</div>
        </div>
        <p className="recomendation-name">НАЗВА НАБОРУ</p>
      </div>
      <div className="recomendation-item recomendation-item-5">
        <div className="recomendation-card recomendation-card-5">
          <img src={images[4]} alt="Рекомендація 5" />
          <div className="recomendation-arrow">↗</div>
        </div>
        <p className="recomendation-name">НАЗВА НАБОРУ</p>
      </div>
      <div className="recomendation-item">
        <div className="recomendation-card recomendation-card-6">
          <img src={images[5]} alt="Рекомендація 6" />
          <div className="recommndation-arrow">↗</div>
        </div>
        <p className="recomendation-name">НАЗВА НАБОРУ</p>
      </div>
    </div>
    <div className="recomendation-tags recomendation-tags-bottom">
      {bottomTags.map((tag, index) => (
        <span className="recomendation-tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  </section>
);
}
export default Recomendation;
