import { useRouter } from "next/router";

import { changeUrlParams } from "../../utils/changeUrlParams";

import styles from "./styles.module.scss";

type FilterItemType = {
  category: string;
};

const FilterItem = ({ category }: FilterItemType) => {
  const { asPath, push } = useRouter();

  const existParam = (paramValue: string) => asPath.includes(paramValue);

  const handleChangeUrl = (text: string) => {
    let newPath;
    const baseOptions = {
      param: "filter",
      baseUrl: "https://products-with-filters.vercel.app",
    };

    if (existParam(text)) {
      newPath = changeUrlParams(asPath, {
        ...baseOptions,
        value: text,
        method: "delete",
      });
    } else {
      newPath = changeUrlParams(asPath, {
        ...baseOptions,
        value: text,
        method: "append",
      });
    }

    push(newPath);
  };

  return (
    <li className={styles.container}>
      <label onClick={() => handleChangeUrl(category)}>
        <input type="checkbox" defaultChecked={existParam(category)} />
        <span>{category}</span>
      </label>
    </li>
  );
};

export default FilterItem;
