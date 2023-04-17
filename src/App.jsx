import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [enviar, setEnviar] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    if (enviar === true) {
      fetch('https://api.disneyapi.dev/characters')
        .then(response => response.json())
        .then(response => {
          setData(response.data)
        })
        .catch(error => console.log(error))
    }
  }, [enviar]);


  // Función para eliminar un personaje por su ID
  const eliminarPersonaje = (_id) => {
    // Filtramos el arreglo de data para excluir el personaje con el ID especificado
    const newData = data.filter(e => e._id !== _id);
    // Actualizamos el estado de data con el nuevo arreglo filtrado
    setData(newData);
  }



  return (
    <div>
      <button class="btn btn-success" onClick={() => setEnviar(true)}>LISTAR</button>
      <div className='row'>
        <h2>Lista de Personajes de Disney</h2>
        {data.map(e => {
          return (
            //Añadimos una key única para cada elemento del arreglo
            <div className="card col-2" key={e._id}>
              <img src={e.imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nombre: {e.name}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <button class="btn btn-outline-danger" onClick={() => eliminarPersonaje(e._id)}>Eliminar</button>

              </div>
            </div>
          )
          })}
          </div>
          </div>
          
  )
}


export default App
