import type { Component } from 'solid-js';
 
import './globals.css';

const App: Component = () => {
  return (
    <div class="app">
      <header>
        <span>
          Cryptonotes
        </span>
        <span style={{"flex-grow": 1}}/>
        <span>
        GitHub
        </span>
      </header>
      <main>
        heloooo
      </main>
      <div style={{"flex-grow": 1}}/>
      <footer>
        Made by erhant
      </footer>

    </div>
  );
};

export default App;
