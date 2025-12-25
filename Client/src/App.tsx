import { useEffect, useState } from 'react'
import Subscription from './components/Subscription'
import './App.css'

interface Subscription {
  id: number
  name: string
  cost: number
  cycle: string
  renewalDate: string
}

function App() {  
  const [subs, setSubs] = useState<Subscription[]>([])

  useEffect(() => {
    // Fetch subscriptions from backend API
    fetch('http://localhost:5123/subs')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched subscriptions:', data)
        setSubs(data)
      })
      .catch(error => console.error('Error fetching subscriptions:', error))
  }, [])

  return (
    <>
      <h1>Welcome to SubTrack</h1>
      <div className="subs">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
              <th>Cycle</th>
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
