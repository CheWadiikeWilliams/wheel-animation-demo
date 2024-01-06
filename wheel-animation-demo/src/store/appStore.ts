import { types } from "mobx-state-tree";
import { ProductStore } from "@/store/product/productStore";
import { IFeature } from "@/store/product/featureStore";
import { GenericObject } from "@/types";

const model = {
    product: ProductStore,
    selectedFeature: types.maybe(types.string),
    selectedIndex: types.maybe(types.number)
};

const volatile = () => ({});

const views = (self:GenericObject) => ({});

const actions = (self:GenericObject) => ({
    setSelectedFeature(featureId:string) {
        self.product.setSelectedFeature(featureId);
        self.selectedFeature = featureId;
        self.selectedIndex = self.product.features.findIndex(
            (feature:IFeature) => feature.id === featureId
        ) ?? self.selectedIndex
    }
});

export const AppStore = types
    .model(`App`, model)
    .volatile(volatile)
    .views(views)
    .actions(actions);
