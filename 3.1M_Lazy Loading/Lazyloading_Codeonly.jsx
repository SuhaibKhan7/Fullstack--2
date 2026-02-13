import React, { Suspense } from "react";
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
return (
<BrowserRouter>
<Suspense fallback={<h2>Loading page...</h2>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Suspense>
</BrowserRouter>
);
}