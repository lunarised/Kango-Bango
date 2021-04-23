import * as react from 'react'

const Header = ()  => {


    return(
        <div className="header" style= {{backgroundColor: 'grey', height: 60 }}>
           <button> Add task </button>
           <button> Add column </button>
        </div>
    )
}
export default Header