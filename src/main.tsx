import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./compontents/Nav.tsx";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";

axios.defaults.baseURL = "http://localhost:3000/";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider
    toastOptions={{
      defaultOptions: { position: "top", isClosable: true, duration: 3000 },
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Nav />
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
    ,
  </ChakraProvider>
);
