import { useEffect, useState } from 'react'
import Subscription from './components/Subscription'
import './App.css'

interface Subscription {
  id: number
  name: string
  cost: number
  cycle: string
  renewalDate: string
  deleteSubscription?: (id: number) => void
  editSubscription?: (id: number) => void
}

function App() {  
  const [subs, setSubs] = useState<Subscription[]>([])

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5123/subs'

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched subscriptions:', data)
        setSubs(data)
      })
      .catch(error => console.error('Error fetching subscriptions:', error))
  }, [])

  function deleteSubscription(id: number) {
    setSubs(subs.filter(sub => sub.id !== id))
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (!response.ok) {
          console.error('Error deleting subscription with ID:', id)
      }
    })
  }

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
              <Subscription key={sub.id} subscription={sub} deleteSubscription={deleteSubscription} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
