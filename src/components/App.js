import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  //the state on line 7 is controlling the onSubmit for aftet search button is clicked
  // the state defined up here is only updated (rerender) from onSubmit, not from the onChange
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Header setSearch={setSearch}/>
      <ListingsContainer search={search}/>
    </div>
  );
}

export default App;
