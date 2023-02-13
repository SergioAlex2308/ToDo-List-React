import React from "react";

import { TodoPanel } from '../components/TodoPanel';
import { TodoData } from '../components/TodoData';
import '../scss/app.scss';

function App() {
  return (
    <main>
      <TodoPanel />
      <TodoData />
    </main>
  );
}

export default App;
