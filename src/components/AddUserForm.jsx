import { useState } from "react";


// eslint-disable-next-line react/prop-types
const AddUserForm = ({ addUser}) => {
    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        email: '',
        address: { city: '' },
        phone: '',
        company: { name: '' }
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ ...newUser, id: Date.now() });
        setNewUser({
          name: '',
          username: '',
          email: '',
          address: { city: '' },
          phone: '',
          company: { name: '' }
        });
      };
    
      return (
        <form onSubmit={handleSubmit}>
        <h1 className="tittle">Add User</h1>
          <input
          className="input"
            type="text"
            placeholder="Name"
            value={newUser.name}
            required
            onChange={e => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
                    className="input"
            type="text"
            placeholder="Username"
            value={newUser.username}
            required
            onChange={e => setNewUser({ ...newUser, username: e.target.value })}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={newUser.email}
            required
            onChange={e => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            className="input"
            type="text"
            placeholder="City"
            value={newUser.address.city}
            required
            onChange={e => setNewUser({ ...newUser, address: { city: e.target.value } })}
          />
          <input
            className="input"
            type="text"
            placeholder="Phone"
            value={newUser.phone}
            required
            onChange={e => setNewUser({ ...newUser, phone: e.target.value })}
          />
          <input
            className="input"
            type="text"
            placeholder="Company"
            value={newUser.company.name}
            required
            onChange={e => setNewUser({ ...newUser, company: { name: e.target.value } })}
          />
         <button className="button" type="submit">
          Add User
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>

        </form>
      );
 }
export default AddUserForm