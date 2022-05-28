import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from './redux/action/addTodo.action';

const Todo = ({todo, idx, deleteTodo, editTodo, selected, text}) => {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', cursor: 'pointer', padding: '5px', border: '1px solid gray', borderRadius: '2px'}}>
            <div onClick={() => editTodo(idx)}>
                {
                    selected === idx ?
                    text
                    :
                    todo
                }
            </div>
            <div style={{cursor: 'pointer'}} onClick={ () => deleteTodo(idx)}>X</div>
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.text,
    selected: state.selected
})

const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key)),
    editTodo: key => dispatch(editTodo(key))
})
export default connect(mapStateToProps, mapDispatchToProps)(Todo);