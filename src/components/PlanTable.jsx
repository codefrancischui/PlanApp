import { Table, TableCell, TableContainer, TableHead, TableBody, TableRow, Container } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class PlanTable extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			choosedPlan: 1,
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
    this.setState({choosedPlan: event.target.value});
  };

	render() {
		return (
			<Container>
				<label>Choose a plan</label>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								{this.props.plans.PlanOptions.map(plan => {
									return (<TableCell>{plan.name}</TableCell>)
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{this.props.plans.PlanItems.map(item => {
								return(
									<TableRow key={item}>
										<TableCell component="th" scope="row">
											{item}
										</TableCell>
										{this.props.plans.PlanOptions.map(plan => {
											return (
												<TableCell> {plan.items.includes(item)? <CheckIcon />:<CloseIcon />} </TableCell>
											)
										})}
									</TableRow>
								)
							})}
							<TableRow>
							
								<TableCell component="th" scope="row"></TableCell>
								{this.props.plans.PlanOptions.map(plan => {
									return (
										<TableCell> {plan.currency + " " + plan.price + " / " + plan.timeInterval } </TableCell>
									)
								})}
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		);
	}
}

export default PlanTable;