import { bindActionCreators, Dispatch } from 'redux';
import { StoreState, StoreAction } from '../store';
import { pageMove, reload } from '../modules/module';
import { connect } from 'react-redux';
import CalendarForm from '../component/CalendarForm';

const mapStateToProps = ({ reducer }: StoreState) => ({
    ...reducer
});

const mapDispatchToProps = (dispatch: Dispatch<StoreAction>) => (
    bindActionCreators({ pageMove, reload }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CalendarForm);