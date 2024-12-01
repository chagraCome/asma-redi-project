import SecHeader from "./components/SecHeader";
import SecFooter from "./components/SecFooter";
import SecContent from "./components/SecContent";
import { BrowserRouter } from "react-router-dom";
import FavoriteContext from "./context/FavoriteContext";
function App() {
  return (
    <BrowserRouter>
      <FavoriteContext>
        <SecHeader />
        <SecContent />
        <SecFooter />
      </FavoriteContext>
    </BrowserRouter>
  );
}

export default App;
