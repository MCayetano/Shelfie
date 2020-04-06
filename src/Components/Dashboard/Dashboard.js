import React, { Component } from 'react';
import Product from '../Product/Product';



class Dashboard extends Component {
    constructor(props) {
        super(props);


    }







    render() {
        let mappedInventory = this.props.inventory.map(elem => {
        return(
                <div>
                <div>Dashboard</div>
                <Product />
                </div>
            )
        });
    

        return (
            
                <div>
                {mappedInventory}
                </div>
        )
    }
}

export default Dashboard;
