import React from 'react';
import { Base64 } from 'js-base64';
import { Cameras, Scanner } from 'react-instascan';

const Scan = ({ history }) => {
    const handleScan = content => {
        localStorage.setItem('scanResult', Base64.encode(`${content}`));
        history.push('/result');
    };

    return (
        <Cameras>
            {cameras => (
                <div>
                    <Scanner camera={cameras[0]} onScan={handleScan}>
                        <video style={{ width: 400, height: 400 }} />
                    </Scanner>
                </div>
            )}
        </Cameras>
    );
};

export default Scan;
