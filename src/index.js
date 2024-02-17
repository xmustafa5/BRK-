import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <App />
      </Layout>
    </QueryClientProvider>
  </BrowserRouter>
);
