class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = { count: 0 };
    }

    componentDidMount() {
        const stringCount = sessionStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            sessionStorage.setItem('count', this.state.count);
        }
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

ReactDOM.render(<Counter />, document.getElementById('app'));
