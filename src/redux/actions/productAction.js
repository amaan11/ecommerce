import * as actionTypes from './actionTypes';
import {
  subCategoryCollection,
  categoryCollection
} from '../../utils/collection';

export function getCategories(type) {
  return async dispatch => {
    const categories = await categoryCollection
      .where('type', '==', type)
      .where('isDeleted', '==', false)
      .get();

    let response = {};

    for (let categoryDoc of categories.docs) {
      const result = { ...categoryDoc.data() };
      const categoryId = categoryDoc.id;

      response[result.name] = [];
      const subCategory = await subCategoryCollection
        .where('categoryId', '==', categoryId)
        .where('isDeleted', '==', false)
        .get();

      for (let subCategoryDoc of subCategory.docs) {
        const subCategory = { ...subCategoryDoc.data() };
        const subCategoryId = subCategoryDoc.id;

        response[result.name].push({
          id: subCategoryId,
          name: subCategory.name
        });
      }
    }
    dispatch(getCategoriesSuccess(response));
  };
}

export const getCategoriesSuccess = res => {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, res };
};
