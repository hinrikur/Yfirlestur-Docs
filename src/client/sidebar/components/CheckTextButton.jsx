import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Server from 'gas-client';
// import { startCorrection } from '../../../server/api-tools';

const { serverFunctions } = new Server();

async function correctionsFromSidebar() {
  try {
    const response = serverFunctions.showSidebar();
    return response;
  } catch (err) {
    alert('Villa kom upp í yfirlestri!');
  }
}

function CheckTextButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // if (isLoading) {
    //   simulateNetworkRequest().then(() => {
    //     setLoading(false);
    //   });
    // }
    if (isLoading) {
      correctionsFromSidebar().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Les yfir...' : 'Lesa aftur yfir skjal'}
    </Button>
  );
}

export default CheckTextButton;
