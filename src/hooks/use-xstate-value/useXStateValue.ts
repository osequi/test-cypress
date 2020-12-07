/**
 * Returns the `value` of an XState state.
 * @param	state The `state` returned by `useMachine`
 * @return        The value of the state.
 * @example
 * useXStateValue({value: 'value'}) => 'value'
 * @example
 * useXStateValue({value: {displayed: 'default'}}) => 'default'
 */
const useXStateValue = (
  state = {
    value: { displayed: null },
  }
): string | null => {
  if (!state) return null;
  if (!state?.hasOwnProperty("value")) return null;

  const value = state.value;

  return typeof value === "string"
    ? value
    : value.displayed
    ? value.displayed
    : null;
};

export default useXStateValue;
