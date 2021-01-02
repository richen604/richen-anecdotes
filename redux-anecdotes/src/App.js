import React from "react";
import Anecdotes from "./components/Anecdotes";
import AnecdotesForm from "./components/AnecdotesForm";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <Anecdotes />
      <AnecdotesForm />
    </div>
  );
};

export default App;
