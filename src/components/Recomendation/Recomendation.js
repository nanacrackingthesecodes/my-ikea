import "./Recomendation.css";

function Recomendation() {
  const images = [
    "/recomendation1.jpg",
    "/recomendation2.jpg",
    "/recomendation3.jpg",
    "/recomendation4.jpg",
    "/recomendation5.jpg",
    "/recomendation6.jpg",
  ];

  return (
    <section className="recommendation">
      <h2 className="recommendation-title">ДОДАТКОВІ РЕКОМЕНДАЦІЇ</h2>

      <div className="recommendation-grid">
        <div className="recommendation-item">
          <div className="recommendation-card recommendation-card-1">
            <img src={images[0]} alt="Рекомендація 1" />
            <div className="recommendation-arrow">↗</div>
          </div>
        </div>

        <div className="recommendation-item">
          <div className="recommendation-card recommendation-card-2">
            <img src={images[1]} alt="Рекомендація 2" />
            <div className="recommendation-arrow">↗</div>
          </div>
        </div>

        <div className="recommendation-item">
          <div className="recommendation-card recommendation-card-3">
            <img src={images[2]} alt="Рекомендація 3" />
            <div className="recommendation-arrow">↗</div>
          </div>
        </div>

        <div className="recommendation-item">
          <div className="recommendation-card recommendation-card-4">
            <img src={images[3]} alt="Рекомендація 4" />
            <div className="recommendation-arrow">↗</div>
          </div>
        </div>

        <div className="recommendation-item recommendation-item-5">
          <div className="recommendation-card recommendation-card-5">
            <img src={images[4]} alt="Рекомендація 5" />
            <div className="recommendation-arrow">↗</div>
          </div>
        </div>

        <div className="recommendation-item">
          <div className="recommendation-card recommendation-card-6">
            <img src={images[5]} alt="Рекомендація 6" />
            <div className="recommendation-arrow">↗</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recomendation;