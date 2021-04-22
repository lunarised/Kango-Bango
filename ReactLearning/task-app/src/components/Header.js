import Button from "./Button"
const Header = ( {onAdd}) => {
   
    return (
        <header className='header'>
            <h1> Task App!</h1>
            <Button onClick={onAdd} text='Add' />
        </header>
    )}
export default Header