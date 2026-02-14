import { useState } from 'react';
import ManageShortLink from './components/ManageShortLink';
import { Provider } from 'react-redux';
import { store } from './store/store';
import StatsCards from './components/stats/StatsCards';

function App() {

  return (
    <Provider store={store}>
      <div className='p-6  bg-[#f0f8ff]'>
        <StatsCards />
        <ManageShortLink />
      </div>
    </Provider>
  )
}

export default App
