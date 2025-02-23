/* eslint-disable react/prop-types */

//Creamos el comonente Cards para mostrar la informacion de cada usuario
const Cards = ({user }) => { // Recibimos la informacion de cada usuario poro Popos USER
  return (
    <>
         <div key={user.id} className="card">
            <h2> {user.name}</h2>
          <p className="text" ><span>UserName:</span> {user.username}</p>
            <p className="text"><span>Email:</span> {user.email}</p>
            <p className="text"><span>City:</span> {user.address.city}</p>
            <p className="text"><span>Phone:</span> {user.phone}</p>
            <p className="text"><span>Company:</span> {user.company.name}</p>
          </div>
    </>
  )
}

export default Cards