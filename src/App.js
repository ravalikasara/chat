import {Component} from 'react'
import './App.css'
import {MdPeopleOutline, MdSend} from 'react-icons/md'

const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']

class App extends Component {
  state = {
    chatDetails: [
      {
        name: 'Dean',
        text: 'Welcome to team chat! Here you can talk to other users.',
        time: '13:28',
        likes: 0,
        color: 'red',
      },
      {name: 'Elin', text: 'Hi guys! How are you?', time: '13:28', likes: 0},
      {
        name: 'Carol',
        text: 'I am good. How are you?',
        time: '13:28',
        likes: 0,
        color: 'green',
      },
      {
        name: 'Bob',
        text: 'Hey, Rolande is also here with us...',
        time: '13:28',
        likes: 0,
        color: 'yellow',
      },
      {
        name: 'Carol',
        text: 'Hey guys, nice to see you all here...',
        time: '13:29',
        likes: 0,
        color: 'pink',
      },
    ],
    sendText: '',
  }

  onSendText = event => {
    this.setState({sendText: event.target.value})
  }

  onSubmitClick = event => {
    event.preventDefault()

    const {sendText, chatDetails} = this.state
    const randomNum = Math.floor(Math.random() * userList.length)
    const now = new Date()
    const options = {hour: '2-digit', minute: '2-digit', hour12: false}
    const timeString = now.toLocaleTimeString('en-US', options)

    const randomcolor = Math.floor(Math.random() * 4)
    const cssStyle = ['red', 'yellow', 'green', 'pink']
    const chat = {
      name: userList[randomNum],
      text: sendText,
      time: timeString,
      likes: 0,
      color: cssStyle[randomcolor],
    }

    this.setState(prevState => ({
      chatDetails: [...prevState.chatDetails, chat],
      sendText: '',
    }))
  }

  render() {
    const {sendText, chatDetails} = this.state

    return (
      <div className="container">
        <div className="sidebar-container">
          <div className="profile-container">
            <span className="profile-photo">RR</span>
            <div>
              <h1 className="profile-name">Rolande Raimondi</h1>
              <p className="profile-desc">Research Nurse</p>
            </div>
          </div>
          <div className="sidebar-main-container">
            <div className="conversation-container">
              <h3 className="profile-name">Conversations</h3>
              <button className="add-conversation-button">+</button>
            </div>
            <ul className="un-lists-container">
              <li className="list-item-container">
                <p className="hash">#</p>
                <p className="list-text">Poland Office</p>
              </li>
              <li className="list-item-container list-text-active">
                <p className="hash hash-active">#</p>
                <p className="list-text list-text-active">Introduction</p>
              </li>
              <li className="list-item-container">
                <p className="hash">#</p>
                <p className="list-text">India Office</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="chat-container">
          <div className="chat-top-container">
            <div>
              <h5 className="chat-top-text">Introductions</h5>
              <p className="profile-desc">
                This Channel is For Company Wide Chatter
              </p>
            </div>
            <span className="profile-desc">
              4 | 100 <MdPeopleOutline className="people" />
            </span>
          </div>
          <hr className="line" />
          <ul className="message-container">
            {chatDetails.map((each, index) => (
              <li className="chat">
                <div className="chat-top">
                  {' '}
                  <p className={` profile-photo ${each.color} `}>
                    {each.name[0]}
                  </p>
                  <p className="name">{each.name}</p>
                  <p className="time">{each.time}</p>
                </div>
                <p className="message">{each.text}</p>
              </li>
            ))}
          </ul>
          <div className="send-container">
            <input
              type="text"
              className="search"
              placeholder="Type a message"
              onChange={this.onSendText}
              value={sendText}
            />
            <button
              type="submit"
              label="button"
              onClick={this.onSubmitClick}
              className="send-button"
            >
              <MdSend />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
