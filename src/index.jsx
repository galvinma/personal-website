

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import Landing from "./Pages/Landing/Landing";
import Photography from "./Pages/Photography/Photography";
import NotFound from "./Pages/NotFound/NotFound";

// Include at root
import 'react-photo-view/dist/react-photo-view.css';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);