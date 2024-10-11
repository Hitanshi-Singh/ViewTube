// import "./App.css";

import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./assets/utilities/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultsPage from "./components/SearchResultsPage";
import LoginPage from "./components/LoginPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/home",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/search/:query",
          element: <SearchResultsPage />,
        },
      ],
    },{
      path:"/login",
      element:<LoginPage/>
    }
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}
/*

Header
Body
  Sidebar
    MenuItems
  MainContainer
    ButtonList
    VideoContainer
      VideoCards

*/
export default App;
