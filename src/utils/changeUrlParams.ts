//cria e redireciona para uma nova Url
type changeUrlParamsType = (
  url: string,
  param: string,
  value: string,
  method?: "set" | "delete" | "append" | "get"
) => string;
export const changeUrlParams: changeUrlParamsType = (
  url,
  param,
  value,
  method = "set"
) => {
  const currentPath = new URL(url, "http://localhost:3000/");

  if (method === "get") {
    const valueOfParam = currentPath.searchParams.get(param);
    return valueOfParam ? valueOfParam.toString() : "";
  }
  if (method === "delete") {
    const newCurrentPath = currentPath.searchParams
      .getAll(param)
      .filter((paramValue) => paramValue !== value);
    currentPath.searchParams.delete(param);
    newCurrentPath.map((paramValue) => {
      currentPath.searchParams.append(param, paramValue);
    });
  }
  if (method === "append" || method === "set") {
    currentPath.searchParams[method](param, value.toString());
  }

  return currentPath.toString();
};
