// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utilities/appStore";
import { Provider } from "react-redux";
// import { Login } from "@mui/icons-material";

// const appRouter=createBrowserRouter([
//   {
//        path:"/",
//       element:<Login />
//    },

// ])
function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      {/* <RouterProvider router={appRouter} /> */}
      <Header />
     <Body />
    </div>
  </Provider>
  );
}



export default App;
