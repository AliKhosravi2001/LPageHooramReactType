import "./App.css";
import Carouselone from "./components/carouselLand/Carouselone";
import "@/assets/fontawesome-free-6.5.2-web/css/all.css";

import HeadLand from "./components/HeadLand/HeadLand";

function App() {
  return (
    <>
      <div className="font-estedad">
        <HeadLand />
        <Carouselone />
      </div>
    </>
  );
}
export default App;
