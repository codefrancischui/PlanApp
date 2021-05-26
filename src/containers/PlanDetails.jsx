import React from 'react';
import PlanInput from '../components/PlanInput';
import PlanTable from '../components/PlanTable';
import {Grid} from '@material-ui/core';

class PlanDetails extends React.Component {
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
	};

	receiveChildValue = (value) => {
    console.log("Parent received value from child: " + JSON.stringify(value)); // value is 42
		this.setState({jsonInput: value});
	};

	render() {
		return (
			<div>
				<Grid container>
					<Grid item xs={6}>
						<PlanInput plans={this.state.jsonInput} callback={this.receiveChildValue} />
					</Grid>
					<Grid item xs={6}>
						<PlanTable plans={this.state.jsonInput} />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default PlanDetails;