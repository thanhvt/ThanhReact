import React from "react";


class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           count: 1
        };
        this.handleClick = this.handleClick.bind(this);
        // this.decreaseCount = this.decreaseCount.bind(this); 
    }

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }   

   render() {
      return (
         <div>
            <h1>Hello World! Cung duoc nhi {this.state.count}</h1>
            <h2>Tesst props {this.props.hoTen}</h2>
            <button onClick={this.handleClick}>Increase</button>
         </div>
      );
   }
}
export default HelloWorld;