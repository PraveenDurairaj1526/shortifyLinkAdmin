import { useState } from 'react';
import ManageShortLink from './components/ManageShortLink';
import AdminBanner from './components/AdminBanner';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {

  return (
    <Provider store={store}>
      <AdminBanner />
      <ManageShortLink />
    </Provider>
  )
}

export default App
