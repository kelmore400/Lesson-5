import React from "react";
import { ProductRow } from "../ProductRow";

export class ProductTable extends React.Component {
    render() {
        console.log(this.props);
        const { filterText, inStockOnly, products } = this.props;
        let lastCategory = null;

        const rows = [];

        products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1 ) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory ) {
                rows.push(
                    <tr key={product.category}>
                        <th colSpan="2">{product.category}</th>
                    </tr>
                );
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}