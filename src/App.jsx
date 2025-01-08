import { useState } from "react";
const initialObj = {
  titolo: "",
  scrittore: ""
};

function App() {
  //stato per salvare i dati del form
  const [formData, setFormData] = useState(initialObj);
  //stato per salvare l'elenco dei libri
  const [libri, setLibri] = useState([]);
  //funzione per gestire i cambiamenti negli input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  
  //funzione per gestire il submit del form
  const handleFormSubmit = (event) => {
    event.preventDefault(); //evita di aggiorn la pagina all'utente
    //aggiungo nuovo libro alla lista:
    setLibri([...libri, { ...formData, id: Date.now() }]);
    //resetta campi del form
    setFormData(initialObj);
  
  }
  const cancella = (index) => {
    setLibri(libri.filter((currLibro) => currLibro.id !== index ))
    console.log("sto per cancellare");
    

  }

  return (
    <>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="titolo"
          className=" mt-3 fw-bold">Inserisci il titolo del libro</label>
        <input
          type="text"
          id="titolo"
          name="titolo"
          value={formData.titolo}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Titolo del libro"
        />

        <div>
          <label htmlFor="scrittore" className="mt-3 fw-bold">Nome scrittore</label>
          <input type="text"
            className="form-control"
            id="scrittore"
            name="scrittore"
            value={formData.scrittore}
            onChange={handleInputChange}
            placeholder="Titolo dello scrittore" />
          <button type="submit" className="mt-2 btn btn-primary">
            Pubblica libro
          </button>
        </div>
      </form>
      {libri.map((currLibro, index) => (
        <div key={index}>
          {/* il bottone al click richiama la funzione delete e gli passa index come parametro */}
          <button onClick={()=>cancella(currLibro.id)}>
            Elimina</button>
          <div>{currLibro.titolo}</div>
          <div>{currLibro.scrittore}</div>
        </div>
      ))}
      
    </>
  )
}

export default App
