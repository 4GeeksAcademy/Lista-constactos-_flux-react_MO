import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ContactList } from "./views/contactList.jsx";
import { AddContact } from "./views/addContact.jsx";
import { UpdateContact } from "./views/updateContact.jsx";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ContactList />} />
                        <Route path="/addContact" element={<AddContact />} />
                        <Route path="/updateContact" element={<UpdateContact />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
