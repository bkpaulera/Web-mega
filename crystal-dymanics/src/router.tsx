import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./screens/home";
import { About } from "./screens/about";
import { Contact } from "./screens/contact";
import { Services } from "./screens/services";
import { NotFoud } from "./screens/not-found";


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFoud />} />
        </Routes>
    );
}