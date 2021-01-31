import React, {useState} from 'react';
import PropTypes from 'prop-types';

const style = {
    form: {
        marginBottom: '20px',
    },
    input: {
        marginRight: '10px',
    }
}

function AddTodo({onCreate}) {
    const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
            setValue('');
        }
    }

    return (
        <form style={style.form} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;