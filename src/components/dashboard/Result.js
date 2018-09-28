import React, { Fragment } from 'react';
import QRCode from 'qrcode-react';
import { Base64 } from 'js-base64';

const Result = () => {
    const scanResult = window.localStorage.getItem('scanResult');
    const decodedScanReulst = scanResult ? Base64.decode(scanResult) : null;

    return (
        <div className="flex">
            {' '}
            {decodedScanReulst ? (
                <Fragment>
                    <div>
                        <p> QR-code preview of scan result: </p>
                        <QRCode value="decodedScanReulst" />
                    </div>
                    <p> Text preview of scan result: {decodedScanReulst}</p>
                </Fragment>
            ) : (
                'No scan result'
            )}
        </div>
    );
};

export default Result;
