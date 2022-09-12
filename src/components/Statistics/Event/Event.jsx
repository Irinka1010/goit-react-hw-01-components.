import PropTypes from 'prop-types';
import css from './Event.module.css'

export const Event = ({label,percentage}) => {
    return ( 
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>

    )
}
Event.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}