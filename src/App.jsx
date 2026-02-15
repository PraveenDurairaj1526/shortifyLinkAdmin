import { useState } from 'react';

import { Provider } from 'react-redux';
import { store } from './store/store';
import StatsCards from './components/stats/StatsCards';
import PerformanceChart from './components/performance/PerformanceChart';
import ManageShortLink from './components/manageShortlinks/ManageShortLink';

function App() {

  return (
    <Provider store={store}>
      <div className='p-6  bg-[#f0f8ff]'>
        <StatsCards />
        <PerformanceChart/>
        <ManageShortLink />
      </div>
    </Provider>
  )
}

export default App
