// INTEGRADOR · App.jsx
// Es dueño de los datos y escribe los valores de las props de los
// componentes que aparecen aquí. Este es el estado final, después de la
// Parte 5: ya se quitó la tarjeta de prueba y su import imagenPrueba.
//
// El clima del HTML de la semana 9 no tiene encargo esta semana, así que
// todavía no aparece aquí. Sigue en la versión HTML, que no se toca.
import Encabezado from "./components/Encabezado.jsx";
import BannerPrincipal from "./components/BannerPrincipal.jsx";
import ListaRutas from "./components/ListaRutas.jsx";
import ListaEmprendimientos from "./components/ListaEmprendimientos.jsx";
import PiePagina from "./components/PiePagina.jsx";
import { rutas } from "./datos/rutas.js";
import { emprendimientos } from "./datos/emprendimientos.js";

function App() {
  return (
    <>
      <Encabezado
        enlaces={["Inicio", "Rutas", "Contacto"]}
        paginaActual="Inicio"
      />
      <main>
        <BannerPrincipal
          titulo="Rutas sostenibles de La Araucanía"
          subtitulo="Senderos y emprendimientos cerca de Temuco"
        />
        <ListaRutas rutas={rutas} />
        <ListaEmprendimientos emprendimientos={emprendimientos} />
      </main>
      <PiePagina />
    </>
  );
}

export default App;
