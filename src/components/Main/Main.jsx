import "./Main.css";
import Foguete from "../../assets/imgs/icon-foquete.png";
import Celular from "../../assets/imgs/icon-celular.png";
import Componente from "../../assets/imgs/icon-componente.jpg";
import ServicoCard from "../ServicoCard/ServicoCard";

const servicos = [
  {
    id: 1,
    icone: Componente,
    titulo: "Design de interface",
    descricao: "Telas claras, pensadas para o usuário.",
  },
  {
    id: 2,
    icone: Celular,
    titulo: "Responsividade",
    descricao: "O mesmo site em qualquer tela.",
  },
  {
    id: 3,
    icone: Foguete,
    titulo: "Performance",
    descricao: "Páginas leves que carregam rápido.",
  },
];

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts responsivos, rápidos e acessíveis para o seu negócio crescer
          na web.
        </p>

        <div className="hero-buttons">
          <a href="#orcamento" className="btn-primary">
            Peça um orçamento
          </a>
          <a href="#portifolio" className="btn-secondary">
            Ver portifólio
          </a>
        </div>
      </section>

      <section className="servico">
        <h2>Nossos serviços</h2>
        <div className="servicos-grid">
          {servicos.map((servico) => (
            <ServicoCard
              key={servico.id}
              icone={servico.icone}
              titulo={servico.titulo}
              descricao={servico.descricao}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
