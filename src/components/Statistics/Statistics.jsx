import PropTypes from 'prop-types';
import { Event } from 'components/Statistics/Event/Event' 
import css from './Statistics.module.css'
export const Statistics = ({ title, stats }) => {
    return (
    <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload stats</h2>}
        <ul className={css.statList}>
            {stats.map(({id,label,percentage}) => (
                <Event key={id}  label={label}
            percentage={percentage}/>                              
            ))}   
           
        </ul>
    </section>
   )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}