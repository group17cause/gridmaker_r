import { Component } from "react";
import TableRow from "./TableRow"

class Table extends Component {
    constructor() {
        super();
        this.state = {
            numRows: 0,
            numCols: 0,
            selectedColor: "red",
        }
    }

    addRow = () => {
        if (this.state.numCols === 0) {
            this.setState(state => {
                return {numCols:state.numCols + 1}
            });
        }
        this.setState(state => {  
            return {numRows:state.numRows + 1}
        });
    }

    addColumn = () => {
        if (this.state.numRows === 0) {
            this.setState(state => {
                return { numRows: state.numRows + 1 }
            });
        }
        this.setState(state => {
            return {numCols:state.numCols + 1}
        });
    }

     removeRow = () => {
        if (this.state.numRows === 0)
        {
            this.setState(state => {
                return {numRows:state.numRows = 0}
            });
        } else if (this.state.numRows === 1) {  // If 1 row left, clear the grid by assigning numRows & numCols to 0
            this.setState(state => {
                return { numCols: state.numCols = 0}
            });
            this.setState(state => {
                return {numRows:state.numRows = 0}
            });
        } else {
            this.setState(state => {
                return {numRows:state.numRows - 1}
            });
        } 

    }

    removeCol = () => {
        if (this.state.numCols === 0) {
            this.setState(state => {
                return {numCols:state.numCols = 0}
            });
        } else if (this.state.numCols === 1) {  // If 1 col left, clear the grid by assigning numRows & numCols to 0
            this.setState(state => {
                return { numCols: state.numCols = 0}
            });
            this.setState(state => {
                return {numRows:state.numRows = 0}
            });
        } else {
            this.setState(state => {
                return {numCols:state.numCols - 1}
            });
        } 
    }
    // The drop down menu's selected color, changes this.state
    handleColorChange = (event) => {  
        this.setState({selectedColor: event.target.value});
    }

    // Changes color of individual table cell
    handleApplyColor = (event) => {  
        event.target.style.backgroundColor = this.state.selectedColor;
    }

    // Fill all <td> elements with this.state.selectedColor (dropdown menu)
    fill = () => {
        let cells = document.querySelectorAll("td");
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = this.state.selectedColor;
        }
    }

    fillU = () => {
        let cells = document.querySelectorAll("td");
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].style.backgroundColor == 'transparent') {
            cells[i].style.backgroundColor = this.state.selectedColor;
          }
        }
    }  
    
    clearAll = () => {
        let cells = document.querySelectorAll("td");
        for (let i = 0; i < cells.length; i++) {
          cells[i].style.backgroundColor = "transparent";
        }
    }   

    render() {
        let rows = [];

        for (let i = 0; i < this.state.numRows; i++) {
            rows.push(<TableRow numCols ={this.state.numCols} handleApplyColor = {this.handleApplyColor} />)
        }
            console.log("rows: " + this.state.numRows + " cols: " + this.state.numCols);
        
        return (
            <div>
                <button onClick={this.addRow}>Add Row</button>
                <button onClick={this.addColumn}>Add Column</button>
                <button onClick={this.removeRow}>Remove Row</button>
                <button onClick={this.removeCol}>Remove Column</button>
                <button onClick={this.fillU}>Fill All Uncolored</button>
                <button onClick={this.fill}>Fill</button>
                <button onClick={this.clearAll}>Clear</button>
                <select onChange={this.handleColorChange}>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                </select>
                <table>
                    {rows}
                </table>
            </div>
        )
    }

}

export default Table;
