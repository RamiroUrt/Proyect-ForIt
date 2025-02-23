

import { useState, useEffect } from 'react';
import axios from 'axios';// Libreria para hacer peticiones HTTP que posee verias sobre un fecthntajas 
import Cards from './components/Cards';
import InputUser from './components/InputUser';
import AddUserForm from './components/AddUserForm';

import Logo from '../public/img/FIT.png';

function App() {
  const [users, setUsers] = useState([]);// Estado para almacenar la lista de usuarios e inciarla con todos sus datos o array vacio
  const [search, setSearch] = useState('');// Estado para almacenar el texto de busqueda, iniciado vacio

  // Cargar los usuarios al montar el componente con axios para convertir la respuesta en json automanticamente
  useEffect(() => { 
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error al obtener los usuarios:', error));
  }, []);


  // Funcion para filtrar los usuarios por nombre, email o ciudad
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.address.city.toLowerCase().includes(search.toLowerCase())
  );

  // Funcion para agregar un nuevo usuario
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <section>
        <div className="hero">
         <h1 className='tittle'>Challenge ForIT</h1>
          <img src={Logo} alt="Logo For IT" />
        </div>
        <InputUser setSearch={setSearch} />
      <div className="user-list">
        {/* Renderizamos la lista de usuarios */} 
        {filteredUsers.map(user => (
         <Cards key={user.id} user={user} /> 
        ))}
      </div>
      {/* Renderizamos el formulario para agregar un nuevo usuario */}
      <div className="box">
         <div className="logo-img">
          <img src={Logo} alt="Logo For IT" />
        </div>
        <div className="form">
          <AddUserForm addUser={addUser} /> 
        </div>
      </div>
    </section>
  );
}


export default App;