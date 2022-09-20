import { useState,  useEffect } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ToTop } from './ScrollTop.styled';


export const ScrollTop = ({showBelow}) => {
    
    const [show, setShow] = useState(showBelow ? false : true)
    
    const handleScroll = () => {
        if (window.scrollY > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window['scrollTo']({top: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll )
        }
    })

    return (
        <div>
            {show && 
            <ToTop onClick={handleClick} >
                <ExpandLessIcon/>
            </ToTop>}
        </div>
    )

}