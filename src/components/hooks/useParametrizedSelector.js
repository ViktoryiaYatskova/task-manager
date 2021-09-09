import { useCallback } from 'react';
import { useSelector } from 'react-redux';

export const useParametrizedSelector = (parametrizedSelectorFactory, params) => {
  // As we want to recreate selector only if refs to params themselves change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selector = useCallback(parametrizedSelectorFactory(...params), [parametrizedSelectorFactory, ...params]);
  
  return useSelector(selector);
}

  // useSelector: state => selector(state) | state => useCallback(selectorFactory(params), params)
  // selector: useCallback(selectorFactory(params), params)
  // selectorFactory : (params) => createSelector(func1, func2, (results) => ...)