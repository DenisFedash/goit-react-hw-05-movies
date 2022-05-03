import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';

export function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const onChangeInput = e => {
    setSearch(e.currentTarget.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (search.trim() === '') {
      toast.error('Enter a search term!');
      return;
    }
    onSubmit(search);
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <button type="submit">
          <span>
            <BiSearchAlt size={20} />
          </span>
        </button>
        <Toaster />
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChangeInput}
          value={search}
        />
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
