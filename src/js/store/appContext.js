import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [store, setStore] = useState({
            Contacts: [],
            contact2: {
                id: "",
                name: "",
                phone: "",
                email: "",
                address: ""
            }
        });

        const [actions, setActions] = useState({
            postContact: async (name, phone, email, address) => {
                // lógica para agregar contacto
                const newContact = {
                    id: Date.now().toString(),
                    name,
                    phone,
                    email,
                    address
                };
                setStore({
                    ...store,
                    Contacts: [...store.Contacts, newContact]
                });
            },
            putContact: async (name, phone, email, address) => {
                // lógica para actualizar contacto
                const updatedContacts = store.Contacts.map(contact =>
                    contact.id === store.contact2.id ? { ...contact, name, phone, email, address } : contact
                );
                setStore({ ...store, Contacts: updatedContacts });
            },
            deleteContact: async id => {
                // lógica para eliminar contacto
                const filteredContacts = store.Contacts.filter(contact => contact.id !== id);
                setStore({ ...store, Contacts: filteredContacts });
            },
            setIdForUpdate: (id, name, address, phone, email) => {
                setStore({
                    ...store,
                    contact2: {
                        id,
                        name,
                        address,
                        phone,
                        email
                    }
                });
            }
        });

        return (
            <Context.Provider value={{ store, actions }}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    StoreWrapper.propTypes = {
        children: PropTypes.element
    };

    return StoreWrapper;
};

export default injectContext;
