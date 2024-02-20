import React, { Component } from "react";
import Feed from "./components/feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: 'João', curtidas: 10, comentarios: 2 },
        { id: 2, username: 'Marcelo', curtidas: 100, comentarios: 13 },
        { id: 3, username: 'Almeida', curtidas: 15, comentarios: 9 },
        { id: 3, username: 'Garcia', curtidas: 1, comentarios: 0 }
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.feed.map(e => {
          return (
            <Feed id={e.id} username={e.username} curtidas={e.curtidas} comentarios={e.comentarios} />
          );
        })}
      </div>
    );
  }
}


export default App;