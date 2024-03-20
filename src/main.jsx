import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout.jsx";
import { IndexPage } from "./pages/IndexPage.jsx";
import { PostPage } from "./pages/PostPage.jsx";

import "./assets/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<IndexPage />} />
        <Route index path="/posts/:postID" element={<PostPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
