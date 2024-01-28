import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './components/Tab'

function App() {
  const [count, setCount] = useState(0)

  const tabsData = [
    {
      label: 'Tab 1',
      content: <p>Tab 1 content is showing here.</p>,
      callback: () => console.log('Tab 1 clicked!'),
    },
    {
      label: 'Tab 2',
      content: <p>Tab 2 content is showing here.</p>,
      callback: () => console.log('Tab 2 clicked!'),
    },
    {
      label: 'Tab 3',
      content: <p>Tab 3 content is showing here.</p>,
      callback: () => console.log('Tab 3 clicked!'),
    },
  ];

  return (
    <>
      <h1>Tabs</h1>
      <Tab items={tabsData} />
    </>
  );
}


export default App
