import { NextApiRequest, NextApiResponse } from "next";
import { ProductType } from "../../types/product";
import { fetchData } from "../../utils/fetchData";

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
        //se o filtro for apenas uma string
        if (typeof filter === "string") {
          products = await fetchData(`${baseUrl}/category/${filter}`);
          //se o filtro for um array de strings
        } else {
          const productsArray: ProductType[][] = await Promise.all(
            filter.map((category) =>
              fetchData(`${baseUrl}/category/${category}`)
            )
          );
          //transformando em um único array
          productsArray.forEach((value) => {
            products = [...value, ...products];
          });
        }
      } else {
        products = await fetchData(baseUrl);
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
