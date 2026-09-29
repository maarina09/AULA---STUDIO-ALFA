import "./Main.css";
import Foguete from "../../assets/imgs/icon-foquete.png"
import Celular from "../../assets/imgs/icon-celular.png"
import Componente from "../../assets/imgs/icon-componente.jpg";

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
          <div className="card">
            <img src={Componente} alt="" />
            <h3>Design de interface</h3>
            <p>Telas claras, pensadas para o usuário.</p>
          </div>

          <div className="card">
            <img src={Celular} alt="" />
            <h3>Responsividade</h3>
            <p>O mesmo site em qualquer tela.</p>
          </div>

          <div className="card">
            <img src={Foguete} alt="" />
            <h3>Performance</h3>
            <p>Páginas leves que carregam rápido.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
