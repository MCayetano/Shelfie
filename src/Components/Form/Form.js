import React, { Component } from 'react';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
            productName: '',
            Price: 0

            

        }
      
    }

    componentDidMount() {

    }


    addImage = (event) => {
        this.setState({
            addImage: event.target.value
        })
    }

    addName = (event) => {
        this.setState({
            addName: event.target.value
        })

    }

    addPrice = (event) => {
        this.setState({
            addPrice: event.target.value
        })
    }

    cancel = () => {
        this.setState ({
            imageURL: '',
            productName: '',
            Price: 0
        })
    }











    render() {
        return(
            <div className ='form'>
                <input type="text" onChange={this.addImage} />
                <input type="text" onChange={this.addName} />
                <input type="text" onChange={this.addPrice} />
                <button onClick='#'>ADD</button>
                <button onClick={this.cancel}>CANCEL</button>
            </div>
        )
    }
}

export default Form;