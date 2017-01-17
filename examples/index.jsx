import React from 'react';
import ReactDOM from 'react-dom';
import Interpolate from '../src';

const App = () => {
    return (
        <div className="container-fluid">
            <p>A React component that renders elements into a format string containing replacement fields. It comes in handy when working with dynamic text elements like localized strings of a translation library.</p>
            <br />
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="panel-title">
                        Object Keys
                    </div>
                </div>
                <div className="panel-body">
                    <p>Example: <strong>{'{{number}} groups enabled'}</strong></p>
                    <hr />
                    <Interpolate
                        replacement={{
                            number: <span style={{ border: '1px solid #ccc', padding: '5px 10px' }}>20</span>
                        }}
                    >
                        {'{{number}} groups enabled'}
                    </Interpolate>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="panel-title">
                        Array Keys
                    </div>
                </div>
                <div className="panel-body">
                    <p>Example: <strong>{'From {{0}} to {{1}}'}</strong></p>
                    <hr />
                    <Interpolate
                        replacement={[
                            <i>2017-01-01T00:00:00Z</i>,
                            <i>2017-01-10T23:59:59Z</i>
                        ]}
                    >
                        {'From {{0}} to {{1}}'}
                    </Interpolate>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
