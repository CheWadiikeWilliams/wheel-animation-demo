import { types, Instance } from "mobx-state-tree";
import { GenericObject } from "@/types";

const model = {
    id: types.identifier,
    title: types.string,
    icon: types.string,
    iconAlt: types.string,
    article: types.frozen()
};

const volatile = () => ({
    selected: false
});

const views = (self:GenericObject) => ({});

const actions = (self:GenericObject) => ({
    setSelected(isSelected:boolean) {
        self.selected = isSelected;
    }
});

export const FeatureStore = types
    .model(`Feature`, model)
    .volatile(volatile)
    .views(views)
    .actions(actions);

export interface IFeature extends Instance<typeof FeatureStore> {};
