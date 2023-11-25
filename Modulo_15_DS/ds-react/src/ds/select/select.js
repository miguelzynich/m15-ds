import Flex from '../flex/flex'
import './styles.css'

const Select = (props) => {

    const color = `color-action-${props.variation}`
    const size = `size-action-${props.size}`
    const fSize = `fSize-action-${props.fSize}`

    return (
        <Flex direction={props.direction}>
            <label className={`${color} ${fSize} selectLabel`} htmlFor={props.id}>{props.labelText}</label>
            <select className={`${color} ${size} ${fSize} w4 br2`} id={props.id}>
                <option value=''></option>
                {props.children}
            </select>
        </Flex>
        
    )
}

export default Select;