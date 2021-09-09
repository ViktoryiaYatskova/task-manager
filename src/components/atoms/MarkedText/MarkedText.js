import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { searchQuerySelector } from 'reducers/appReducer/selectors';

const MarkedText = ({ children: text }) => {
  const searchQuery = useSelector(searchQuerySelector);
  // splits keeping separator
  const queryRegex = new RegExp(`(${searchQuery})`, 'gi');
  const parts = text.split(queryRegex);

  return searchQuery ? (
    <>
      {parts.map((part, index) => {
        const isQueryPart = queryRegex.test(part);

        return (
          // The elements order will change only in case of new text
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>{isQueryPart ? <mark>{part}</mark> : part}</React.Fragment>
        );
      })}
    </>
  ) : (
    text
  );
};

MarkedText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MarkedText;
