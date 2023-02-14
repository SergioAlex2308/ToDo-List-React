import React from "react";

import { TodoPanel } from '../components/TodoPanel';
import { TodoData } from '../components/TodoData';
import { TodoProvider } from '../context';

import '../scss/app.scss';

function App() {
  return (
    <TodoProvider>
      <main>
        <TodoPanel />
        <TodoData />
      </main>
    </TodoProvider>
  );
}

export default App;
