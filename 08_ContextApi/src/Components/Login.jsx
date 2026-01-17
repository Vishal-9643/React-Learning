import React ,{useState , useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
     const [username, setUsername] = useState('');
     const [pass , setPass] = useState('');

     const {setUser} = useContext(UserContext);

     const handleSubmit = (e) => {
          e.preventDefault();
          setUser({username});
     }
  return (
    <div>
     <h2>Login</h2>
     <input type='text'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='Username'/>
      {"    "}
     <input type='text' 
      value={pass}
      onChange={(e) => setPass(e.target.value)}
      placeholder='Password'/>
     <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login