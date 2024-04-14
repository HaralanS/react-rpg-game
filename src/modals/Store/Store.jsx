import { useState } from "react";
import ".Store.cs";

function Store() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <div className="store-screen">
      <h1>Loja de bugigangas</h1>

      <button onClick={toggleModal} className="btn-store">ir pra loja</button>

      <div className="overlay"></div>
      <div className="modal-content">
        <h2>hello modal</h2>
        <p>texto aleatorio</p>
        <button onClick={toggleModal}>sair</button>
      </div>
    </div>
  )
}