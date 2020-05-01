import React, {PureComponent} from "react";
import {inject, observer} from "mobx-react";

interface Props {
    a: string;
}
interface State {
    val: number;
}

@inject('root')
@observer
export default class MyComponent extends React.Component<Props, State> { //PureComponent
    constructor(props: Props) {
        super(props);
        this.state = {
            val: 0
        }
    }

    componentDidMount() {
        // Subscribe to changes
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
        // Clean up listener
    }


    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        if (nextProps.a != null && nextProps.a != prevState.val.toString()) {
            return {
                ...prevState,
                options: nextProps.a
            };
        }
        return null;
    }

    handlelick = (index) => {
        this.setState({
            val: index
        });
    };

    myDiv: HTMLElement = null;

    render() {
        const {a} = this.props;

        return (
            <div ref={el => this.myDiv = el}>
                {this.state.val}
                {this.props.a}
            </div>
        )
    }
}
