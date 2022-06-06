import React ,{useContext} from 'react'
import AlertContext from '../context/alert/alertContext'

const Alert = () => {
    const context = useContext(AlertContext);
    const { alert } = context;
    console.log(alert);
  return (
    <div className='container text-center my-2' style={{height:'50px' , width:'40%'}}>
        {alert &&
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        {alert.msg}
         </div>
        }
    </div>
  )
}

export default Alert