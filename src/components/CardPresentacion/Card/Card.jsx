import "./Card.css";

const Card = ({ titulo, subtitulo, img, orientacion }) => {
  return (
    <>
      {orientacion ? (
        <div className="containerCard">
          <div className="imgCard">
            <img src={img} />
          </div>
          <div className="parrafoCard">
            <span className="lineParrafo"></span>
            <h3 className="tituloParrafo">{titulo}</h3>
            <p className="subtituloParrafo">{subtitulo}</p>
            <button className="btnParrafo">Ver Más</button>
          </div>
        </div>
      ) : (
        <div
          className="containerCard"
          style={{ gridTemplateColumns: "1fr 1.5fr" }}
        >
          <div className="imgCard" style={{ gridArea: "1/2/1/3" }}>
            <img src={img} />
          </div>
          <div className="parrafoCard " style={{ gridArea: "1/1/1/2" }}>
            <span className="lineParrafo"></span>
            <h3 className="tituloParrafo">{titulo}</h3>
            <p className="subtituloParrafo">{subtitulo}</p>
            <button className="btnParrafo">Ver Más</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
