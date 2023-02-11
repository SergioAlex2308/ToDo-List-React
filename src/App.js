import React from "react";

import { TodoPanel } from './TodoPanel';
import { TodoData } from './TodoData';
import './scss/App.scss';

function App() {
  return (
    <main>
      <TodoPanel />
      <TodoData />
    </main>
  );
}

export default App;
