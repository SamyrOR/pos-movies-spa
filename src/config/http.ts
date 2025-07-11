import axios from "axios";

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmZmMWMxOWNmZmEzYTg4N2Y4ZDg1ZDEwMjVjODA1YSIsIm5iZiI6MTc1MTkzNzY2MC4wMDEsInN1YiI6IjY4NmM3MjdiMmZkMTIzMjY4MjcwMzIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sm0mqFaiyj0q_h4wpt0Ya1TyQxQkJQoc7wvWSJzGKNo'
  }
})
