import logo from '../../imgs/logo.png'
import './header.css'

export default () =>{
    return (
        <header>
            <div>
            <div className='logo-text if'>
                IF
            </div>
            {//<img src={logo} id='logo'></img>
            }
            <div className='logo-text maker'>
                MAKER
            </div>
            </div>
           
        </header>
    )
}