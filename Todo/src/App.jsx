import InputTask from "./components/InputTask";
import ListTask from "./components/ListTask";
import Footer from "./components/Footer";

import { TodoProvider } from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>

      <main className="todo-container">

        <h1>TODO</h1>

        <div className="todo-box">

          <InputTask />

          <ListTask />

          <Footer />

        </div>

      </main>

    </TodoProvider>
  );
}

export default App;