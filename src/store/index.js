import { createStore, compose, apllyMiddleware } from "redux";

import reducers from "./reducers";

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        apllyMiddleware(...[]),
        console.tron.createEnhacer()
      )
    : apllyMiddleware(...[]);

const store = createStore(reducers, composer);

export default store;
