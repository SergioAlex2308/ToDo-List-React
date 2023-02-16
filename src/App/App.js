import React from "react";

import { TodoPanel } from '../components/TodoPanel';
import { TodoData } from '../components/TodoData';
import { TodoProvider } from '../context/index';
import { ThemeContextWrapper } from '../context/themeWrapper';

import '../scss/app.scss';

function App() {
  return (
    <ThemeContextWrapper>
      <TodoProvider>
        <main>
          <TodoPanel />
          <TodoData />
        </main>
      </TodoProvider>
    </ThemeContextWrapper>
  );
}

export default App;
