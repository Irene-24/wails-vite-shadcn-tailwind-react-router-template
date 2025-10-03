

import React from "react";
import { createRoot } from "react-dom/client";


import "./style.css";
import AppRoutes from "./routes/app-routes";


const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
<AppRoutes/>
);
