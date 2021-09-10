import React from 'react';
import PropTypes from 'prop-types';
import { ListContainter } from './List.styles';

const List = ({ items, ItemComponent, className }) => (
  <ListContainter className={className}>
    {items.map(item => (
      <li key={item.id}>
        <ItemComponent {...item} />
      </li>
    ))}
  </ListContainter>
);

const ListItemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
});

List.defaultProps = {
  className: '',
};

List.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(ListItemShape).isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
};

export default List;
