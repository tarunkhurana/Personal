import React from "react";

const CheckBox=()=>{
    return(
        <div className="field">
            <div>
                <input type="checkbox" name={this.props.item.name} value={this.props.item.id} checked={this.props.item.checked} onChange={this.props.handleChange}/>
            </div>
        </div>
    )
}

CheckBox.propTypes={
    item:React.PropTypes.object.isRequired,
    handleChange:React.PropTypes.func.isRequired
};

export default CheckBox;