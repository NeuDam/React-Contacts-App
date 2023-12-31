import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalStateContext } from "../Context/ContextState";

function User() {
  const params = useParams();

  const { contactsList } = GlobalStateContext();

  const user_info = contactsList.filter(
    (contact) => contact.id == params.id
  )[0];

  const [ photo, setPhoto ] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breed/husky/images/random')
     .then(res => res.json())
     .then((data) => {
      console.log(data)
        setPhoto(data.message)
      })
  },[])

  return (
    <main>
      <div className="card_container">
        <div className="header_card">
          <div className="container_image">
            <img
              src={photo}
              alt=""
            />
          </div>
          <h1>{user_info.name}</h1>
        </div>
        <div className="details_card">
          <span>Number: {user_info.number}</span>
          <span>City: {user_info.city}</span>
          <span>Age: {user_info.age}</span>
          <span>ID Document: {user_info.document_id}</span>
          <span>Instagram:<a href={'https://instagram.com/'+user_info.instagram}>{user_info.instagram}</a></span>
        </div>
      </div>
    </main>
  );
}

export default User;
