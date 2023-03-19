const url =
  'https://dummyjson.com/products?limit=10&select=title,description,price,rating,brand,category,thumbnail';

export async function getData() {
  const res = await fetch(url);
  return await res.json();
}
