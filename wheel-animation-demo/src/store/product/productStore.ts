import { types, Instance } from "mobx-state-tree";
import { useContext } from "react";
import { AppContext } from "@/App";
import { FeatureStore, IFeature } from "@/store/product/featureStore";
import { GenericObject } from "@/types";

const model = {
    id: types.identifier,
    features: types.array(FeatureStore)
};

const volatile = () => ({});

const views = (self:GenericObject) => ({
    getFeatureById(id:string) {
        return self.features.find((feature:IFeature) => feature.id === id)
    }
});

const actions = (self:GenericObject) => ({
    setSelectedFeature(id:string) {
        self.features.forEach((feature:IFeature) => {
            feature.setSelected(feature.id === id)
        })
    }
});

export const ProductStore = types
    .model(`Product`, model)
    .volatile(volatile)
    .views(views)
    .actions(actions);

export interface IProduct extends Instance<typeof ProductStore> {};
