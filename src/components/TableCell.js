import { BackgroundColor } from "chalk";

function TableCell(props) {
  return <td onClick = {props.handleApplyColor}
    style = {{
        backgroundColor : 'transparent'
    }}> 
    </td>
}

export default TableCell;