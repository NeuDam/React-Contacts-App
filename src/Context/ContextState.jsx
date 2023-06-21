import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const GlobalStateContext = () => {
    return useContext(Context)
}

export function ContextStateProvider({children}) {


    const defineContacts = () => {
        let result = localStorage.getItem('contacts')
        return result ? JSON.parse(result) : []
    }

    const [contactsList, setContactsList] = useState(defineContacts)

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contactsList))
    }, [contactsList])


    const newContact = (data_contact) => {
        setContactsList([...contactsList,data_contact])
    }

    const deleteContact = (id) => {
        setContactsList(contactsList.filter(contact => contact.id != id))
    }

  return (
    <Context.Provider value={{
        newContact,
        contactsList,
        deleteContact
    }}>
        {children}
    </Context.Provider>
  )
}
