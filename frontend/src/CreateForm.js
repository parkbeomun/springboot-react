import React from 'react'
import ReactDOM from 'react-dom'

class CreateForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {value:''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        alert(e.target.value)
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        할일입력 :
                    </label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default CreateForm