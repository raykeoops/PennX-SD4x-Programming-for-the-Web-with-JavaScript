/* Error handling not implemented. */

class FontChooser extends React.Component {
    constructor(props) {
        super(props);
        //var max = this.props.max;
        //var min = this.props.min;
        var size = this.props.size;
        this.state = {
            isHidden: true,
            isBold: false,
            color: "black",
            size: Number(size)
        }
    }
    
    toggle() {
        this.setState({isHidden: !this.state.isHidden});
    }
    
    handleBold() {
        this.setState({isBold: !this.state.isBold});
    }
    
    handleIncrease() {
        if (this.state.size < this.props.max) {
            this.setState({size: this.state.size + 1});
        }
    }
    
    handleDecrease() {
        if (this.state.size > this.props.min) {
            this.setState({size: this.state.size - 1});
        }
    }
    
    handleReset() {
        this.setState({size: Number(this.props.size)});
    }

    render() {
        var weight = (this.state.isBold) ? "bold" : "normal";
        var size = this.state.size;
        var color = (this.state.size == this.props.max || this.state.size == this.props.min) ? "red" : "black"
        var textStyle = {
            fontWeight: weight,
            fontSize: size
        };
        var FontSizeStyle = {
            color: color
        }
        console.log(this.props.max);
        console.log(this.state.size);
        return(
            <div>
                <input type="checkbox" id="boldCheckbox" onChange={this.handleBold.bind(this)} hidden={this.state.isHidden} />
                <button id="decreaseButton" onClick={this.handleDecrease.bind(this)} hidden={this.state.isHidden}>-</button>
                <span id="fontSizeSpan" style={FontSizeStyle} onDoubleClick={this.handleReset.bind(this)} hidden={this.state.isHidden}>{this.state.size}</span>
                <button id="increaseButton" onClick={this.handleIncrease.bind(this)} hidden={this.state.isHidden}>+</button>
                <span id="textSpan" style={textStyle} onClick={this.toggle.bind(this)}>{this.props.text}</span>
            </div>
        );
    }
}

