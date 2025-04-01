import { useEffect, useState } from 'react';

const useWebSocket = (
  url: string,
  handler: (data: { [key: string]: string }) => void
) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const webSocket = new WebSocket(url);
    setSocket(webSocket);

    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      handler(data);
    };

    return () => {
      if (webSocket) {
        webSocket.close();
      }
    };
  }, [url, handler]);

  return socket;
};

export default useWebSocket;
