import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

const title = 'Avtosport главная';

class Home extends Component {
    render() {
        return(
            <div className={s.root}>
                <div className={s.container}>

                </div>
            </div>
        )
    }
    constructor(props,context) {
        super(props,context);
        context.setTitle(title);
        this.state = {
            counter: 0,
            inputValue: "",
            sorteredNews: false
        };
    }
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
