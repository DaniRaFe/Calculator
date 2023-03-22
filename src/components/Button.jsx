const Button = (props) => {
    return (
        <button
        type='button'
        className={props.style}
        value="8"
        onClick={(e) => props.handleClick (e)}
        style={{}}
        >8</button> 
    )
}

export default Button;