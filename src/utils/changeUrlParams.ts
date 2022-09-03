//cria e redireciona para uma nova Url
type changeUrlParamsType = (
  url: string,
  options:
    | {
        param: string;
        value?: string;
        method: "get";
        baseUrl: string;
      }
    | {
        param: string;
        value: string;
        method: "set" | "append" | "delete";
        baseUrl: string;
      }
) => string;
export const changeUrlParams: changeUrlParamsType = (url, options) => {
  const { method, value, param, baseUrl } = options;
  const currentPath = new URL(url, baseUrl);

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
