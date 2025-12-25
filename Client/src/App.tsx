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
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5123/subs'
    fetch(apiUrl)
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
              <th>Billing Cycle</th>
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
