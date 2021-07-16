import { Switch, Route } from "react-router-dom";
import { BookList } from "./BookList/BookList";
import { CreateBook } from "./CreateBook";
import { UpdateBook } from "./UpdateBook";
import { NavBar } from "./shared/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/update-book/:id">
          <UpdateBook />
        </Route>
        <Route path="/create-book">
          <CreateBook />
        </Route>
        <Route path="/">
          <BookList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
