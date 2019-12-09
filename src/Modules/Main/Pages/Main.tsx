import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IStore} from '../../../Core/Models';
import {MainActions} from '../Actions/MainActions';
import {IActions} from '../Actions/MainActions';
import {IData} from '../Models';
import {MainServices} from '../Services/MainServices';

/**
 * Модель props на странице Main.
 *
 * @prop {IMainActions} [actions] Экшены.
 * @prop {IData} [asyncData] Данные с бэка.
 */
export interface IMainProps {
    actions?: IActions;
    asyncData?: IData;
}

class Main extends React.Component<IMainProps, {}> {
    componentDidMount = () => {
        this.props.actions.getData();
    };

    render(): JSX.Element {
        const {
            asyncData: {data},
        } = this.props;

        return <div>{data}</div>;
    }
}

const mapStateToProps = (store: IStore) => ({
    asyncData: store.mainReducer.asyncData,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: new MainActions(dispatch, new MainServices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
