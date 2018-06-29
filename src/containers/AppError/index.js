import React from 'react';
import { connect } from 'react-redux';
import SpilledSample from './spilled-sample.svg';
import Button from '../../components/Button';
import { goBack } from '../../state/routerActions';

declare var Raven: any;

let AppError = ({ goBack }) => (
  <div className="error-page">
    <div className="error-page__text">
      <h1>Uh-oh something went wrong!</h1>
      <div>
        Try refreshing the page or <Button text="Go Back" onClick={goBack} />
      </div>

      {Raven.lastEventId() && (
        <div className="error-page__button-row">
          <Button
            text="Submit Feedback"
            buttonStyle="secondary"
            onClick={() => Raven.showReportDialog()}
          />
        </div>
      )}
    </div>

    <div>
      <img src={SpilledSample} alt="Something went wrong" />
    </div>
  </div>
);
AppError = connect(() => ({}), {
  goBack
})(AppError);

export default AppError;