import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserProvider, PairUserProvider, OnlineUsersProvider } from '@/services/context/userContext';
import { WebSocketProvider } from '@/services/websockets/webSocket';
import '@/services/api/interceptor';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <PairUserProvider>
        <OnlineUsersProvider>
          <WebSocketProvider>
            <App />
          </WebSocketProvider>
        </OnlineUsersProvider>
      </PairUserProvider>
    </UserProvider>
  </BrowserRouter>,
)
