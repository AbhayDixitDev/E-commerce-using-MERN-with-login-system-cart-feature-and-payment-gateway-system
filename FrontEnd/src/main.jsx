import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import App from './App.jsx'
import store from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <Elements stripe={stripePromise}>
            <App />
        </Elements>
    </PersistGate>
    </Provider>
  </StrictMode>,
)
