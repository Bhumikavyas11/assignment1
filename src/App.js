import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import LoginForm from "./Components/LoginForm";



function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="" element={<LoginForm/>}/> 
  <Route path="/dashboard" element={<Dashboard/>}/> 
</Routes>

</BrowserRouter>
  );
}

export default App;
