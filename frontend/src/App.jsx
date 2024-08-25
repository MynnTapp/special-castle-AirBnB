import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { restoreUser } from "./store/session";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Layout() {
   const dispatch = useDispatch();
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      dispatch(restoreUser()).then(() => setIsLoaded(true));
   }, [dispatch]);

   return (
      <>
         <Navigation isLoaded={isLoaded} />
         {isLoaded && <Outlet />}
      </>
   );
}

const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <h1>Welcome!</h1>,
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;