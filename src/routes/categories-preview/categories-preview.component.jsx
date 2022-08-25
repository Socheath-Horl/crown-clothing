import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <div>CategoryPreview</div>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;