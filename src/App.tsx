import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { DataProvider } from "./context/dataContext";
import Begin from "./components/Begin";

function App() {
  return (
    <DataProvider>
      {/* Welcome Page */}
      <Begin />

      {/* Quiz Page */}
      <Quiz />

      {/* Result Page */}
      <Result />
    </DataProvider>
  );
}

export default App;
