import ReactDOM from 'react-dom/client';
import React from 'react';
import  {register}  from './register';
import { login }  from './login';






export default  function () {
  const [Email, setEmail] = useState("");

  return (
    <form>
      <label>Enter Your Email:
        <input
          type="text" 
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);


