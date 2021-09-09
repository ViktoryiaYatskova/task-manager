import { useCallback } from 'react';
import { useSelector } from 'react-redux';

export const useParametrizedSelector = (parametrizedSelectorFactory, params) => {
  // As we want to recreate selector only if refs to params themselves change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selector = useCallback(parametrizedSelectorFactory(...params), [
    parametrizedSelectorFactory,
    ...params,
  ]);
  // TODO: recreating selector on deps-changes kill memoized optimization of createSelector,
  // as memo-cache is lost. Re-design parametrized selector approach to get full advantage of memoization

  return useSelector(selector);
};
