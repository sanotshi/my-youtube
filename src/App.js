import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import appStore from "./utilities/appStore";
import { Provider } from "react-redux";
import WatchPage from "./components/WatchPage";
 import  Login  from "./components/Login";


const appRouter = createBrowserRouter([
  {
    path:"login",
    element:<Login />,
  },
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
 
  return (
  
    <Provider store={appStore}>
      <div className="App">

      <Header />
         <RouterProvider router={appRouter} /> 
      </div>
    </Provider>
 
  );
}

export default App;
