import React from 'react';
import { connect } from 'react-redux';
import { addText, addTodo, editAddTodo } from './redux/action/addTodo.action';

class InputField extends React.Component {
    handleChange = e => this.props.addText(e.target.value);
    handleSubmit = e => {
        e.preventDefault();
        if(this.props.selected || this.props.selected === 0 )
            this.props.editAddTodo({
                value: this.props.text,
                selected: this.props.selected
            });
        else this.props.addTodo(this.props.text);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='todo' value={this.props.text} placeholder='Enter Name' onChange={this.handleChange} style={{outline: 'none', fontSize: '20px', marginTop: '10px', width: '225px'}} />
                <input type='text' name='todo' value={this.props.text} placeholder='Enter Genre' onChange={this.handleChange} style={{outline: 'none', fontSize: '20px', marginTop: '10px', width: '225px'}} />
                <input type='number' name='todo' value={this.props.text} placeholder='Enter Rating' onChange={this.handleChange} style={{outline: 'none', fontSize: '20px', marginTop: '10px', width: '225px'}} />
                <br />
                <br />
            </form>
        )
    }
}

const mapStateToProps = state => ({
    text: state.text,
    selected: state.selected
})

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
    addText: value => dispatch(addText(value)),
    editAddTodo: obj => dispatch(editAddTodo(obj))
})
export default connect(mapStateToProps, mapDispatchToProps)(InputField);