import { Switch, Route } from "react-router-dom";
import AppPosts from "./pages/AppPosts";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/posts">
        <AppPosts />
      </Route>
    </Switch>
  );
}