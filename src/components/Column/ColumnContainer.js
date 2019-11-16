import { connect } from 'react-redux';
import Column from './Column';

export const getCardForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);