import PropTypes from 'prop-types';
import { marginShape } from './propShapes';

export default {
  disableMouseEvents: PropTypes.bool,
  seriesKey: PropTypes.string,
  onClick: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseLeave: PropTypes.func,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  margin: marginShape,
};
