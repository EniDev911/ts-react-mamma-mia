import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/NavigationComponent";
import AppProvider from "./context/AppCtx";
// pages
import Carrito from "./pages/Carrito";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";

function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="ts-react-mamma-mia">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} index/>
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
