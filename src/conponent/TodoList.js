import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

function TodoList(props) {
    
    return (
        <React.Fragment>
            <div className='todo_style'>
           <CancelIcon style={{cursor:'pointer'}} className='fa-times'  onClick={()=>{props.onSelect(props.id)}}/>
            <li>{props.text}</li>
            </div>
        </React.Fragment>
    )

}

export default TodoList