import React from 'react'
import css from 'next/css'
import emoji from 'react-emoji'

const container = css({
	'maxWidth':'960px',
	'margin':'0 auto'
})


class emojicomplete extends React.Component {
	constructor(props){
		super(props);
		this.state = {'value': 'Hello!'}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event){
		this.setState({value: event.target.value})
	}
	render() {
		return (<div>
					<input value={this.state.value} onChange={this.handleChange} />
					<p>{emoji.emojify(this.state.value)}</p>
				</div>
			)
	}
}

export default emojicomplete
