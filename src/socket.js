export const createSocket = async () => {
  const socket = new WebSocket(
    // Use wss:// for secure connections to avoid mixed content errors
    // This is necessary when the app is deployed or tunnelled
    `${location.protocol === 'https:' ? 'wss:' : 'ws:'}//${
      location.host
    }/socket`
  );

  // Wait for the WebSocket connection to open
  await new Promise((resolve) => {
    socket.onopen = resolve;
  });

  return socket;
};
