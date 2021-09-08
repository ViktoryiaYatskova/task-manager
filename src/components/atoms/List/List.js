import React from 'react';
import PropTypes from 'prop-types';
import { ListContainter } from './List.styles';

const List = ({ items, ItemComponent }) => (
  <ListContainter>
    {items.map(item => (
      <li key={item.id}>
        <ItemComponent {...item} />
      </li>
    ))}
  </ListContainter>
);

const ListItemShape = {
  id: PropTypes.string.isRequired,
};

List.propTypes = {
  items: PropTypes.arrayOf(ListItemShape).isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
};

export default List;
