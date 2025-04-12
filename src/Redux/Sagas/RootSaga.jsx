import { all } from "redux-saga/effects";

import maincategorySagas from "./MaincategorySagas";
import brandSagas from "./BrandSagas";
import subategorySagas from "./SubcategorySagas";
import productSagas from "./ProductSagas";
import testimonialSagas from "./TestimonailSagas";
import subcategorySagas from "./SubcategorySagas";

export default function* RootSaga() {
  yield all([
    maincategorySagas(),
    subcategorySagas(),
    brandSagas(),
    productSagas(),
    testimonialSagas()
  ]);
}
