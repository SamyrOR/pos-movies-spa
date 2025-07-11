import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./views/RootLayout.tsx";
import { Home } from "./views/Home.tsx";
import { Movies } from "./views/movies/Movies.tsx"
import { MovieDetail } from "./views/movieDetail/MovieDetail.tsx";

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
        },
        {
          path: "/movies/:id",
          element: <MovieDetail />
        }

      ]
    }
  ]
)
