import React from "react";
import Card from "./components/heroCard";
import Container from "./components/Container";
import hero from "./heroes.json";
import Header from "./components/Header";
import Nav from "./components/Nav"

class App extends React.Component {
  state = {
    hero,
    score: 0,
    highscore: 0
  };
  
  gameReset = () => {
    if (this.state.highscore < this.state.score) {
      this.setState({highscore: this.state.score}, function () {
        console.log(this.state.highscore);
      })
    }
      this.state.hero.forEach(hero => {
        hero.clicked = 0;
      });
      this.setState({score: 0});
    }
  
  handleCount = id => {
    this.state.hero.find((d, i) => {
      if (d.id === id) {
        if(hero[i].clicked === 0) {
          hero[i].clicked = hero[i].clicked + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
            console.log(hero.clicked);      
          });
          this.state.hero.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameReset();
        }
      }
        }
          );
        }

  render() {
    return (
      <div>

        <Nav 
        score={this.state.score} 
        highscore={this.state.highscore}
        />
        <Header>Marvel Memory Game</Header>
      <Container>
        {this.state.hero.map(hero => (
          <Card
            handleCount = {this.handleCount}
            id={hero.id}
            key={hero.id}
            image={hero.image}/>
        ))}
      </Container>
      </div>);}}

export default App;
