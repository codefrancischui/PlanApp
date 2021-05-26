import React from 'react';
import {Button, Container, TextareaAutosize} from '@material-ui/core';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import CheckIcon from '@material-ui/icons/Check';

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
			planInput: props.plans,
			isError: false,
			errorMsg: '',
		};

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleChange(event) {
		console.log(event);
		if(event.error) {
			console.log('Error');
			this.setState({isError: true, errorMsg: event.error.reason});
		} else {
			console.log('OK');
			this.setState({isError: false, errorMsg: '', planInput: event.jsObject});
		}
	}

	handleSubmit() {
		if(!this.state.isError)
		{
			console.log("handleSubmit called.");
			console.log(this.state.planInput);
			this.props.callback(this.state.planInput);
		}
	}
	
	render() {
		return (
			<Container>
				<label>Input</label>
				<JSONInput
        id          = 'a_unique_id'
        placeholder = { this.state.planInput }
        locale      = { locale }
        height      = '550px'
				onChange={this.handleChange}
    		/>
				<div>
					<Button variant="outlined" onClick={this.handleSubmit} disabled={this.state.isError}>Submit</Button>
				</div>
				<label>{this.state.errorMsg}</label>
			</Container>
		);
	}
}

export default PlanInput;