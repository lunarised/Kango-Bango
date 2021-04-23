import * as react from 'react'
type KBColumnProps = {
    color?: string,
    title?: string,
    tasks?: string[]
}
const defaultProps :KBColumnProps = {
    color: '#00cc00',
    title: "waah",
    tasks: []
}
const KBColumn = ( props  :KBColumnProps)  => {

    const {color, title, tasks} = { ...defaultProps, ...props}

    return(
        <div className="KBColumn" style= {{backgroundColor: color, height: 200 }}>
            <h1>{title}</h1>
        </div>
    )
}
export default KBColumn