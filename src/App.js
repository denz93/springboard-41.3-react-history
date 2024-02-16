import React from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <JokeList />
//       </div>
//     );
//   }
// }

function App () {
  return <div className="App">
    <JokeList/>
  </div>
}

export default App;
