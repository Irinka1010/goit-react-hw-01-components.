import PropTypes from 'prop-types';
import css from './StatisEvent.module.css'

export const StatisEvent = ({label,percentage}) => {
  
    return ( 
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>

    )
}
StatisEvent.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}