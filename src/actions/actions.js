export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const BUY_ITEM = 'BUY_ITEM';

export const removeFeatureAction = index => {
  return { type: REMOVE_FEATURE, payload: index };
};

export const buyItemAction = index => {
  return { type: BUY_ITEM, payload: index };
};
