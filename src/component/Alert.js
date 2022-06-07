import React ,{useContext} from 'react'
import AlertContext from '../context/alert/alertContext'

const Alert = () => {
    const context = useContext(AlertContext);
    const { alert } = context;
    
  return (
    <div className=' mx-auto my-2 w-30' style={{height:'20px' , width:'30%'}}>
        {alert &&
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        {alert.msg}
         </div>
        }
    </div>
  )
}

export default Alert