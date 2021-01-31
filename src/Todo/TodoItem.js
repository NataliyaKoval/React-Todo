import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '5px'
    },

    input: {
        marginRight: '10px',
    }
}

function TodoItem({todo, index, onChange}) {
    const classes = [];
    const { removeTodo } = useContext(Context);

    if (todo.completed === true) {
        classes.push('done');
    }
    
    return(
        <li style = {styles.li}>
            <span className={classes.join(' ')}>
                <input style = {styles.input} type='checkbox' onChange={() => onChange(todo.id)}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </li> 
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem;