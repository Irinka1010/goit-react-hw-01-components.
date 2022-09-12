import PropTypes from 'prop-types';
import {Item} from 'components/TransactionHistory/Item/Item'
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
     return (
    <table className={css.transactionHistory}>
        <thead className={css.tableHeader}>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
            <tbody className={css.tableBody}>
                {items.map(({ id, type, amount, currency }) => (
                  <Item key={id}type={type} amount={amount} currency={currency}/>
              ))}  
             </tbody>
    </table>
    )
}
TransactionHistory.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired,
    })),
}