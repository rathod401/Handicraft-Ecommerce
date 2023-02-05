import ReactDom from "react-dom";
import App from "./App";
// import Hooks from "./Practice/Hooks";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(<>
  <BrowserRouter>
    <App />
    {/* <Hooks/> */}
  </BrowserRouter>
</>,
  document.getElementById("root")
);
