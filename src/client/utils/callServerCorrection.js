import Server from 'gas-client';

const { serverFunctions } = new Server();

async function CallServerCorrection() {
  console.log(serverFunctions);
  try {
    const response = await serverFunctions.startCorrection();
    return response;
  } catch (err) {
    alert('Villa kom upp í yfirlestri!');
  }
}

export default CallServerCorrection;
