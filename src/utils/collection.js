import { firestore } from './firebase';

const userCollection = firestore.collection('users');
const categoryCollection = firestore.collection('category');
const subCategoryCollection = firestore.collection('subCategory');

export { userCollection, categoryCollection, subCategoryCollection };
