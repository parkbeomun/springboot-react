import React from 'react'
import ReactDOM from 'react-dom'

const title = 'React And SpringBoot Example';

import CreateForm from './CreateForm';

ReactDOM.render(

    <div>
        <h2>{title}!</h2>
        <CreateForm/>
    </div>,
    document.getElementById('root')
)