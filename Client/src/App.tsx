import { useState } from 'react'
import Subscription from './components/Subscription'
import './App.css'

function App() {  
  const [subs, setSubs] = useState([
    { id: 1, name: 'Netflix', cost: 13.99, cycle: 'Monthly', renewalDate: '2024-07-15' },
    { id: 2, name: 'Spotify', cost: 9.99, cycle: 'Monthly', renewalDate: '2024-07-20' }
  ])

  return (
    <>
      <h1>Welcome to SubTrack</h1>
      <div className="subs">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Plan</th>
              <th>Price</th>
              <th>Renewal Date</th>
            </tr>
          </thead>
          <tbody>
            {subs.map(sub => (
              <Subscription key={sub.id} subscription={sub} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
