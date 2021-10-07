const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  { title: "Solo en Whatsapp", duration: 223, categories: ["comedia", "thriller"] },
  { title: "El gato con guantes", duration: 111, categories: ["comedia", "aventura", "animación"] },
];

let categories = [];
for (let movie of movies) {
  // console.log(movie.categories) Muestra todas las categorias pero repetidas.
  let genres = movie.categories;
  for (let elements of genres) {
    //  console.log(elements); Muesta los valores del array categories
    if (!categories.includes(elements)) {
      categories.push(elements);
    };
  };
};
console.log(categories);
