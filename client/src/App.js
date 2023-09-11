import './App.css';
import axios from 'axios'
import {useState} from 'react'
import jwt_decode from 'jwt-decode'

function App() {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    try {
      // Api request
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
  
    </div>
  );
}

export default App;
