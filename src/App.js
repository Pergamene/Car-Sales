import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { removeFeatureAction, buyItemAction } from './actions/actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  console.log('PROPS (in App): ', props);
  const dispatch = useDispatch();

  const removeFeature = index => {
    dispatch(removeFeatureAction(index));
  };

  const buyItem = index => {
    dispatch(buyItemAction(index));
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('STATE (in App mSTP): ', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(
  mapStateToProps,
  { removeFeatureAction, buyItemAction }
)(App);
