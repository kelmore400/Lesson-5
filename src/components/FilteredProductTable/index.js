import React from "react";
import { ProductTable } from "../ProductTable";
import { SearchBar } from "../SearchBar";

class FilteredProductTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnly = this.handleInStockOnly.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
            filterText,
        });
    }
    handleInStockOnly(inStockOnly){
        this.setState({
            inStockOnly,
        });
    }
    render() {
        console.log(this.state);
        return (
            <div className="simple-form"><SearchBar 
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockOnly}
            inStockOnly={this.state.inStockOnly}
            />
            <ProductTable 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            products={this.props.products}
            />
            </div>
        )
    }
}
export default FilteredProductTable;