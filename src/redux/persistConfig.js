import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = (rootReducer) =>
  persistReducer(persistConfig, rootReducer);
