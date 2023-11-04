import "./AdvantageCard.css";

export const AdvantageCard = ({ imgSrc, text, color }) => {
  return (
    <div className="advantage-card" style={{ backgroundColor: color }}>
      <img src={imgSrc} />
      <p>{text}</p>
    </div>
  );
};
