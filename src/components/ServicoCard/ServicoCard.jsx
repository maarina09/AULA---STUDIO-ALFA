import "./ServicoCard.css";

function ServicoCard({ icone, titulo, descricao }) {
  return (
    <div className="card">
      <img src={icone} alt="" />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

export default ServicoCard;
