import { Routes, Route } from "react-router-dom";
import Index from "./components/dashboard/User/Iindex";

function App() {
  return (
    <Routes>
      <Route path="/delete" element={<Index />} />
    </Routes>
  );
}

export default App;
