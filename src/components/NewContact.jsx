import { useState } from "react";
import { GlobalStateContext } from "../Context/ContextState";

function NewContact() {
  const { newContact } = GlobalStateContext();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [instagram, setInstagram] = useState("");
  const [document_id, setDocument] = useState("");

  const send_data = (e) => {
    e.preventDefault();

    const object_user = {
      id: window.crypto.randomUUID(),
      name,
      number,
      city,
      age,
      instagram,
      document_id,
    };

    newContact(object_user);

    setAge('')
    setCity('')
    setDocument('')
    setName('')
    setNumber('')
    setInstagram('')

  };

  return (
    <>
      <button className="show_form" id="button_show" onClick={() =>  {
        document.getElementById('button_show').style.visibility = 'hidden'
        let cont_f = document.getElementById('cf');
        cont_f.classList.toggle('container_form_hidden')
      }}>Show Form</button>

      <div className="container_form" id="cf">
        <button className="hidde_form" onClick={ () => {
          let cont_f = document.getElementById('cf');
          cont_f.classList.toggle('container_form_hidden')
          document.getElementById('button_show').style.visibility = 'visible'
        }

        }>x</button>
        <h1 >NEW CONTACT</h1>
        <form onSubmit={send_data}>
          <input
            autoFocus
            type="text"
            placeholder="NAME"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="NUMBER"
            value={number}
            required
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            maxLength="10"
          />
          <input
            type="text"
            placeholder="CITY"
            value={city}
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="AGE"
            value={age}
            required
            onChange={(e) => {
              setAge(e.target.value);
            }}
            maxLength="2"
          />
          <input
            type="text"
            placeholder="INSTAGRAM"
            value={instagram}
            required
            onChange={(e) => {
              setInstagram(e.target.value);
            }}
        />
        <input
          type="text"
          placeholder="DOCUMENT ID"
          value={document_id}
          required
          onChange={(e) => {
            setDocument(e.target.value);
          }}
        />
        <button>ADD CONTACT</button>
      </form>
    </div>
    </>
  );
}

export default NewContact;
