import React from 'react'
import {Button} from 'react-bootstrap'

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      data: []
    }
    this.setStateHandler = this.setStateHandler.bind(this);
  }

  setStateHandler(){
    var item = "Java"
    var ar =this.state.data.slice();
    ar.push(item);
    this.setState({data: ar})
  }

  render() {
    return (
      <div>
        <button onClick = {this.setStateHandler} > PushData</button>
        <h2>State Array Data: {this.state.data}</h2>
      </div>
    )
  }

}

class App1 extends React.Component{

    render(){
      return (
          <div>
          <h4>{this.props.propArray}</h4>
          <Header/>
          <Xyz data="Test data" x="100" />
          <Abc/>
          </div>
      )
    }
  }

  class Header extends React.Component{
      render(){
          return (
              <div className="App-header">
                <div>Welcome to my page</div>
                <div>How  should I help you</div>
              </div>
          )
      }
  }

  class Xyz extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        msg: this.props.data
      }
    }
      render(){
          return (
              <div>
             <h1>Hello</h1>
             <h2>{this.state.msg}</h2>
             <h3>{this.props.data + this.props.x}</h3>
              </div>
          )
      }
  }
  class Abc extends React.Component {
    render(){
      
      const greeting ="id";
      const displayAction =true;
      const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  },
  {
    emoji: ':+1:',
    name: "Sad"
  }
];
      return (
        <div className="App-header">
      <h1>Hello, World 1235</h1>
      
      {displayAction && <p>I am writing JSX</p>}
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
      )
    }
  }

  class Instructions extends React.Component{
    render(){
      return(
        <p>Emoji program.</p>
      )
    }
  }

  export default App;