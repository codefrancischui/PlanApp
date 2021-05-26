import React from 'react';
// import Button from '@material-ui/core/Button';

class PlanInput extends React.Component {
	constructor(props) {
		super(props);
		let defaultJsonInput = {
			PlanItems: ['General', 'Specialist', 'Physiotherapy'],
			PlanOptions: [
				{
					id: 1,
					name: 'Standard Plan',
					items: ['General'],
					currency: 'HK$',
					price: 0,
					timeInterval: 'Monthly',
				},
				{
					id: 2,
					name: 'Premium Plan',
					items: ['General', 'Specialist', 'Physiotherapy'],
					currency: 'HK$',
					price: 388,
					timeInterval: 'Monthly',
				},
			] 
		}
		this.state = {
			jsonInput: defaultJsonInput,
			data: [],
		};
	}

	handleSubmit()
	{
		console.log("handleSubmit called.");
	}
	
	render() {
		return (
			<section>
				<form onSubmit={this.handleSubmit}>
				
				<text>Input</text>
				<textarea value={JSON.stringify(this.state.jsonInput)}  defaultValue="" />
				{/* <textarea value={this.state.jsonInput.map(e=>JSON.stringify(e))}  defaultValue="val" /> */}
				{/* <Button variant="outlined">Submit</Button> */}
				<button>Submit</button>
				</form>
			</section>
		);
	}
}

export default PlanInput;