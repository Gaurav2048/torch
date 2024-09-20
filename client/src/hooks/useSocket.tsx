import { useState, useEffect, useCallback, useRef } from 'react';
import { io } from 'socket.io-client';

const useSocket = () => {
  const [socket, setSocket] = useState<any>(null);
  const listenersRef = useRef<any>({});  // Store listeners to manage clean-up

  useEffect(() => {
    // Connect to the socket namespace
    const socketInstance = io(`http://localhost:3001`, {
      withCredentials: false,
    });

    setSocket(socketInstance);

    // Clean up socket connection on unmount
    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, []);

  // Function to emit events
  const emitEvent = useCallback((event: string, data: any) => {
    if (socket) {
      socket.emit(event, data);
    }
  }, [socket]);

  // Function to listen for events
  const listenEvent = useCallback((event: string, callback: any) => {
    if (socket) {
      socket.on(event, callback);
      // Store the listener for later cleanup
      listenersRef.current[event] = callback;
    }

    // Return a cleanup function to remove the listener
    return () => {
      if (socket && listenersRef.current[event]) {
        socket.off(event, listenersRef.current[event]);
        delete listenersRef.current[event];
      }
    };
  }, [socket]);

  return {
    emitEvent,
    listenEvent,
    isConnected: !!socket,
  };
};

export default useSocket;
