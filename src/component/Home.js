import Note from "./Note"
import React from 'react'

const Home = () => {
 

  return (
    <>
    <div className='container my-3'>
      <h2>
        Add Note
      </h2>
      <form>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Title" />
        <label htmlFor="floatingInput">Title</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingPassword" placeholder="Discription" />
        <label htmlFor="floatingPassword">Discription</label>
      </div>
      <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>

      <Note/>
      
    </div>

    
    </>
  )
}

export default Home