import React from "react";

export class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnly = this.handleInStockOnly.bind(this);
    }
    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value);
    }
    handleInStockOnly(e){
        this.props.onInStockChange(e.target.checked);
    }
    render() {
        console.log(this.props);
        return (
            <form>
                <p>
                    <input type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Search..."/>
                </p>
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockOnly}/>
                    Only show products in stock
                </p>
            </form>
        )
    }
}
