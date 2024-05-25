import { useContext } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from '../App';
import { BsSunFill, BsMoonFill, BsBrightnessLowFill} from "react-icons/bs";

const Title = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleSwitch = (checked) => {
        setTheme(
            theme === 'light' ? 'dark' : 'light'
        )
    }

    return (
        <header className={theme === 'dark' ? 'orange-text' : 'light-text'}>
            <span>Mode [{theme} {theme === 'dark' ? <BsMoonFill/> : <BsSunFill/>}]</span>
            <div className={theme === 'dark' ? 'dark-switch' : 'light-switch'} id='toggle-switch'>
                <Switch 
                    onChange={toggleSwitch} 
                    checked={theme === 'dark'}
                    uncheckedIcon={
                        <div className='icon'>
                            <BsSunFill size='1.5rem' color='#ffa600'/>
                        </div>
                    }
                    checkedIcon={
                        <div className='icon'>
                            <BsMoonFill size='1.5rem' color='#001466'/>
                        </div>
                    }
                    handleDiameter={30}
                    height={40}
                    width={80}
                    offColor="#ffe8bd"
                    onColor="#91a7ff"
                    offHandleColor="#ffa600"
                    onHandleColor="#001466"
                />
            </div>
        </header>
    );
};

export default Title;