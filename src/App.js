import './App.css'

function App() {
  return (
  <div className="App">
     <header className="header">
        <h1>Educação fisica </h1>
        
        <nav>
            <ul>
                <li><a href="#introducao">Introdução</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#oportunidades">Oportunidades</a></li>
                <li><a href="#ferramentas">Ferramentas</a></li>
            </ul>
        </nav>
    </header>

    

    <section id="introducao" className="section">
        <div className="content" ><h2>Introdução sobre Jogador Profissional </h2></div>
        <p>
        Para ser considerado um atleta profissional, a pessoa precisa ter um alto nível de habilidade e dedicação ao esporte. Isso significa que eles precisam treinar e se dedicar ao esporte em tempo integral, muitas vezes sacrificando outras áreas de suas vidas para alcançar o sucesso no esporte
        </p>
        <div class="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOQ6Tx80Qjl_nfbXu4cG62wqWnd-Z8umSOw&s"></img>
        </div>
    </section>

    <section id="habilidades" className="section">
        <h2>Habilidades Necessárias</h2>
        <ul>
            <li><strong>Habilidade Técnica:</strong> Capacidade de executar fundamentos como passes, chutes, dribles e controle de bola com precisão e eficácia.</li>
            <li><strong>Inteligência Tática:</strong>  Entendimento das estratégias de jogo, posicionamento em campo e capacidade de tomar decisões rápidas durante as partidas.</li>
            <li><strong>Trabalho em Equipe:</strong> Habilidade de colaborar com colegas de equipe, contribuir para um ambiente de equipe positivo e trabalhar em direção a objetivos comuns.</li>
            <li><strong>Comunicação:</strong>Capacidade de se comunicar efetivamente com treinadores, colegas de equipe, mídia e fãs.</li>
            <li><strong>Condição Física:</strong> Aptidão para manter um alto nível de condicionamento físico, força, velocidade e resistência ao longo da temporada.</li>
        </ul>

        <div class="image">
          <img src="https://s2-ge.glbimg.com/Ci9iFLNqoEair_LCMH4l2qiCxLU=/0x0:3000x2431/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/09/20/gettyimages-149506582.jpg"></img>
        </div>
        
    </section>

    <section id="oportunidades" className="section">
        <h2>Oportunidades de Carreira</h2>
        <ul>
            <li><strong>Treinador:</strong> Ele desenvolve planos de treinamento que englobam aspectos físicos, técnicos, táticos e psicológicos, visando ao aprimoramento constante dos jogadores. Além disso, o treinador é responsável por definir as estratégias de jogo, esquemas táticos, substituições e outras decisões durante as partidas.</li>
            <li><strong>Auxiliar técnico:</strong> É um treinador que dá assistência e colabora com o técnico principal em todo o seu trabalho. Além disso, é uma pessoa de sua total confiança e compartilha da mesma ou similar ideia de como se construir uma equipe.</li>
            <li><strong>Coordenador:</strong> Cuida do bom funcionamento da comissão técnica. Toma conta da parte logística e administrativa, como a reserva de hotéis, passagens aéreas, seleção de campos de treino.</li>
            <li><strong>Preparador físico:</strong> Avalia o preparo físico de alunos, desenvolve atividades físicas e ensina técnicas desportivas para melhorar o desempenho físico das pessoas e realiza treinamentos especializados com atletas de diferentes esportes.</li>
            <li><strong>Treinador de goleiros:</strong> Treina futuros goleiros, compartilhando conhecimento e experiências.</li>
        </ul>

        <div class="image">
          <img src="https://wp.cienciadabola.com.br/wp-content/uploads/2020/10/treinador-de-futebol.jpg"></img>
        </div>
    </section>

  
  </div>
);
}

export default App;