import React, { Component } from "react";
import QuizApp from './QuizApp';

class App extends Component {
  state = {
  };


  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            <QuizApp />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
