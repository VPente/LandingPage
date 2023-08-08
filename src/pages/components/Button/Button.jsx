import { Children } from "react"
import "./style.jsx"
export const Button = ({Children, component: Component, url, ...props }) => {
    const handleButtonClick = () => {
        window.open(url, '_blank', 'noopener noreferrer');
      };
    return(
        <>
        <Component {...props} onClick={handleButtonClick}>
            {Children}
        </Component> 
        </>
    )
}
