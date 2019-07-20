import React, { Component } from "react";
import Header from "../Header";
import Container from "../Container";
import Card from "../Card";
import hero from "../../heroes.json";

class Clicky extends Component {
  state = {
    hero,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ hero: this.randomizeHero(this.state.hero) });
  }

  correctAttempt = newHero => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      hero: this.randomizeHero(newHero),
      score: newScore,
      topScore: newTopScore
    });
  };

  incorrectattempt = hero => {
    this.setState({
      hero: this.heroReset(hero),
      score: 0
    });
  };

  heroReset = hero => {
    const heroReset = hero.map(item => ({ ...item, clicked: false }));
    return this.randomizeHero(heroReset);
  };

  randomizeHero = hero => {
    let i = hero.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = hero[i];
      hero[i] = hero[j];
      hero[j] = temp;
      i--;
    }
    return hero;
  };

  itemClick = id => {
    let guessedCorrectly = false;
    const newHero = this.state.hero.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.correctAttempt(newHero)
      : this.incorrectattempt(newHero);
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          {this.state.hero.map(item => (
            <Card

              key={item.id}
              id={item.id}
              shake={!this.state.score && this.state.topScore}
              handleClick={this.itemClick}
              image={item.image}
              
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Clicky;
