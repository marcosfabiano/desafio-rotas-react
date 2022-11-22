import "./styles.css";

import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();

  let prod = "";

  if (params.name == "computers") {
    prod = "Computador";
  } else if (params.name == "eletronics") {
    prod = "Eletrônico";
  } else if (params.name == "books") {
    prod = "Livro";
  }

  return (
    <div className="container container-prod">
      {<p>{prod} 1</p>}
      {<p>{prod} 2</p>}
      {<p>{prod} 3</p>}
    </div>
  );
}
