import React from 'react';
import msftLogo from '../../assets/msftLogo.png'
import warning from '../../assets/warning.png'
import '../../custom.css'

export class Header extends React.Component {
    render() {
        return(
            <div>
                <div className="w-auto h-[12vh] float-center bg-black glass rounded-xl mx-10 mt-4 mb-1 ">
                    <img src={msftLogo} className='mx-5 -mb-4 w-[15vh]'></img>
                    <h1 className="mx-5 text-3xl font-sans font-semibold text-white text-center">Tenant Admin Settings Manager</h1>
                </div>
            </div>
        )
    }
}

export class Footer extends React.Component {
    render() {
        return(
            <div className='inline-flex ml-[39vw] pr-3 w-auto h-[4.4vh] glass bg-slate-300'>
                <img src={warning} className='mx-2 w-[3.8vh]'/>
                <p className='m-auto text-black  text-sm'>This web-app is developed for Demo purposes only.<br></br>
                <p className=' text-center mr-5 mb-3'>&copy; Microsoft 2022</p></p>
            </div>
        )
    }
}