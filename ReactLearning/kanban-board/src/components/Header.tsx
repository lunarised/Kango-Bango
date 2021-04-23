import * as react from 'react'

type HeaderProps = {
    addColumn: () => void
}
const Header = ( props: HeaderProps )  => {



    return(
        <div className="header" style= {{backgroundColor: 'grey', height: 60 }}>
           <button> Add task </button>
           <button onClick={props.addColumn}> Add column </button>
        </div>
    )
}
export default Header