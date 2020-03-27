import React from 'react';
import './App.css';
import Post from "./components/post";
import './components/post/style.css'
function App() {
  return (
  <div className="App">
    <Post
    name='Anakin Skywalker'
    photo='https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg'
    nickname="@dart_vader"
    content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
    image="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
    date="26 февр."
    comments="486"
    share="146"
    like="887"
    />
  </div>
  )
}

export default App;
