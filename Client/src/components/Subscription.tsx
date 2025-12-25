interface SubscriptionProps {
	subscription: {
		id: number
		name: string
		cost: number
		cycle: string
		renewalDate: string
	}
}

function Subscription({ subscription }: SubscriptionProps) {
	const cycleMap: { [key: string]: string } = {
		0: 'Weekly',
		1: 'Monthly',
		2: 'Yearly',
	}

	return (
		<tr>
			<td>{subscription.name}</td>
			<td>${subscription.cost}</td>
			<td>{cycleMap[subscription.cycle]}</td>
			<td>{new Date(subscription.renewalDate).toLocaleDateString()}</td>
			<td>
				<button>Edit</button>
			</td>
			<td>
				<button>Delete</button>
			</td>
		</tr>
	)
}

export default Subscription
