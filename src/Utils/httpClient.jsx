const API = "https://api.themoviedb.org/3";

export default function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjNhYTA0NmVkODIwZDFlNDEzNDBhYWUzYjBhNmQwOCIsInN1YiI6IjYzZTY3OWRhYTNkMDI3MDA5MTYwYTExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cKJ_SKSmVCadqm4C2QvK44ALj__n5vT5GC27ZUBNbSY",
      "Content-Type": "application/json;charset=utf-8",
    },
  })
  .then((result) => result.json())
  
}

