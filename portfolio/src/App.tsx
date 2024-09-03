import { Route, Routes } from "react-router-dom";
import MainPage from "./Compoments/Pages/MainPage/MainPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}
export default App;
