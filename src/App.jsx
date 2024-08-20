// import "./App.css";

import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./assets/utilities/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

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
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <Header />
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
