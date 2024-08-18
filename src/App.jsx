// import "./App.css";

import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./assets/utilities/store";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element:<MainContainer/>
        },
        {
          path:"/watch",
          element:
        }
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <Header />
        <Body />
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
