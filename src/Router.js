import { Switch, Route } from "react-router-dom";
import AppPosts from "./pages/AppPosts";
import AppSinglePosts from "./pages/AppSinglePots";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/posts">
        <AppPosts />
      </Route>
      <Route path="/posts/:postId">
        <AppSinglePosts />
      </Route>
    </Switch>
  );
}