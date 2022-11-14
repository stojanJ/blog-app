import { Switch, Route } from "react-router-dom";
import AppPosts from "./pages/AppPosts";
import AppSinglePosts from "./pages/AppSinglePots";
import AppAddPost from "./pages/AppAddPost";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/posts">
        <AppPosts />
      </Route>
      <Route path="/posts/:postId">
        <AppSinglePosts />
      </Route>
      <Route exact path="/add">
        <AppAddPost />
      </Route>
      <Route exact path="/edit/:id">
        <AppAddPost />
      </Route>
    </Switch>
  );
}