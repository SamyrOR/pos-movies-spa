import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./views/RootLayout.tsx";
import { Home } from "./views/Home.tsx";
import { Movies } from "./views/Movies.tsx"

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/movies",
          element: <Movies />
        }
      ]
    }
  ]
)
