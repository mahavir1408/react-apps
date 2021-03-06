class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = { count: props.count };
    }

    addOne() {
        this.setState((pervState) => ({ count: pervState.count + 1}));
    }

    minusOne() {
        this.setState((pervState) => ({ count: pervState.count - 1}));
    }

    reset() {
        this.setState(() => ({ count: 0 }));
        // this.setState({ count: 0});
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: 0});
        // this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));
