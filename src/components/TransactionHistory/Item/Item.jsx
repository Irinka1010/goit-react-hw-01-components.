import PropTypes from 'prop-types';
import css from './Item.module.css';
export const Item = ({type,amount,currency}) => {
    return (
    <tr className={css.tableRow}>
        <td className={css.tableData}>{type}</td>
        <td className={css.tableData}>{amount}</td>
        <td className={css.tableData}>{currency}</td>
    </tr>
    )
}
Item.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}