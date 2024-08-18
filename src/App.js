import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-red-200 via-pink-200">
      <h1 className="text-3xl font-bold pt-16 text-blue-900">
        Password Generator
      </h1>
      <PasswordGenerator></PasswordGenerator>
      <Footer />
    </div>
  );
}

export default App;
