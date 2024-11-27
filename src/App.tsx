import Header from "./components/Header";
import Main from "./components/Main";
import { menuItems } from "./data/db";

function App() {
  console.log(menuItems);

  return (
    <>
      <Header />
      <Main/>
    </>
  );
}

export default App;
