import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeFeatureAction, buyItemAction } from './actions/actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  console.log('PROPS (in App): ', props);
  const dispatch = useDispatch();
  const [additionalPrice, car, additionalFeatures] = useSelector(state => [state.additionalPrice, state.car, state.additionalFeatures]);

  const removeFeature = index => {
    dispatch(removeFeatureAction(index));
  };

  const buyItem = index => {
    dispatch(buyItemAction(index));
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default App;
