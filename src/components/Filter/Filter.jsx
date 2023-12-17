import { setFilteredContacts } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const filterQuery = useSelector(getFilter);
  const dispatch = useDispatch();

  const showFilteredContacts = e => {
    dispatch(setFilteredContacts(e.target.value));
  };

  return (
    <div className={styles.filterWrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="filter"
        value={filterQuery}
        onChange={showFilteredContacts}
      />
    </div>
  );
};
