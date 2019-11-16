import { connect } from 'react-redux';
import List from './List';

export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(List);