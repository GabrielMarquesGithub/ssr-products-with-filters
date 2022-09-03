import { NextApiRequest, NextApiResponse } from "next";
import { ProductType } from "../../types/product";

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      //desconstruindo os parâmetros
      const query = req.query;
      const { filter } = query;

      //url base
      const baseUrl = "https://fakestoreapi.com/products";

      //var para produtor
      let products: ProductType[] = [];

      if (filter) {
        if (typeof filter === "string") {
          await fetch(`${baseUrl}/category/${filter}`)
            .then((res) => res.json())
            .then((json) => (products = json));
        } else {
          const productsArray: ProductType[][] = await Promise.all(
            filter.map((category) =>
              fetch(`${baseUrl}/category/${category}`).then((res) => res.json())
            )
          );
          productsArray.forEach((value) => {
            products = [...value, ...products];
          });
        }
      } else {
        await fetch(baseUrl)
          .then((res) => res.json())
          .then((json) => (products = json));
      }

      res.status(200).json(products);
    } catch {
      res.status(500).send({ error: "failed to fetch data" });
    }
  } else {
    //informando erro por método invalido
    res.setHeader("Allow", "POST");
    res.status(485).end("Method not allowed");
  }
}
