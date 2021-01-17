import React from 'react'
import './header.css'
import logo from './headimg.jpg'
class header extends React.Component{
    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-3'>
                        <div className='head-img'>
                
                      </div>
                    </div>
                    <div className='col-6'><h1>Ten Recipe</h1></div>
                    <div className='col-3'></div> 
            </div>
            </div>
        )
    }
}
export default header 