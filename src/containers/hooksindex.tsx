import { bindActionCreators, Dispatch } from 'redux';
import { StoreState, StoreAction } from '../store';
import { pageMove, reload } from '../modules/module';
import { connect } from 'react-redux';
import CalendarForm from '../component/CalendarForm';

const mapStateToProps = (state: StoreState) => {
    console.log("reducer");
    console.log(state);
    return({...state})
} 

const mapDispatchToProps = (dispatch: Dispatch<StoreAction>) => (
    bindActionCreators({ pageMove, reload }, dispatch)
);

export type ContainerProps =
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(CalendarForm);