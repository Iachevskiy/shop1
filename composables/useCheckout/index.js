export const useCheckout = function () {
  const showCheckout = useState('showCheckout', () => false);
  const toggleShowCheckout = () => {
    showCheckout.value = !showCheckout.value;
  };

  return {
    showCheckout,
    toggleShowCheckout,
  };
};
