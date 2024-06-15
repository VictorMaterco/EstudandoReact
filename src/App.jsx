import React from "react";
import { Navbar } from "./components/Navbar/Navbar"
import "./styles/App.css"
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

import article1Img from "./assets/images/imgArticle1.png";
import article2Img from "./assets/images/imgArticle2.png";
import article3Img from "./assets/images/imgArticle3.png";


// Componente em classse é uma classe que herda a classe Component do React e retorna HTML dentro do método render.

class App extends React.Component {
  // Método responsável por renderizer o conteúdo HTML do nosso componente
  render() {
    return (
      <>
      <Navbar />

      <section id="articles">
      <Article
      title="Designing Dashboards"
      provider="Nasa"
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      thumbnail={article1Img}
      />

      <Article
      title="Vibrant Portraits of 2020"
      provider="SpaceNews"
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      thumbnail={article2Img}
      />

      <Article 
      title="36 Days of Malayalam type"
      provider="Spaceflight Now"
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      thumbnail={article3Img}
      />

      <Article 
      title='Designing Dashboards'
      provider="NASA"
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      thumbnail={article1Img}
      />

      </section>
      </>
    );
  }
}

export default App;
