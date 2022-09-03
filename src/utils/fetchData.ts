export const fetchData = async (url: string) => await (await fetch(url)).json();
