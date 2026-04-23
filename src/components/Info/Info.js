import "./Info.css";

function Info() {
  return (
    <section className="info">
      <h2 className="info-title">ВАЖЛИВА ІНФОРМАЦІЯ</h2>

      <div className="info-wrapper">
        <div className="info-image">
          <img src="/laptop.jpg" alt="" />
        </div>
        <div className="info-card">
          <div className="info-card-content">
            <h3>ВАЖЛИВА ІНФОРМАЦІЯ</h3>
            <p>
              lorem ipsum dolor sit amet consectetur. bibendum neque at em integer
              integer. tempus a mi in enim dui rhoncus vulputate nulla et. ornare
              sed cursus sed viverra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;