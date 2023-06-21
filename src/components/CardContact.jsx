import { GlobalStateContext } from "../Context/ContextState"
import { Link } from "react-router-dom"

function CardContact({contact}) {

  const {deleteContact} = GlobalStateContext()

  const handlerOnClick = () => {

    let confirm_f = confirm('Are you sure?')

    if (confirm_f){
        deleteContact(contact.id)
    }
    else{
        alert('CANCELED')
    }
  }

  return (
    <div className="contact">
  
        <button onClick={handlerOnClick}>x</button>
        <h2>{contact.name}</h2>
        <span>Number: {contact.number}</span>
        <span>City: {contact.city}</span>
        <Link to={'user/'+contact.id}>more details</Link>
    </div>
  )
}

export default CardContact
