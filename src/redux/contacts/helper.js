export const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};

export const handleFulfilled = ({ contacts }) => {
  contacts.isLoading = false;
  contacts.error = null;
};

export const handleRejected = ({ contacts }, action) => {
  contacts.isLoading = false;
  contacts.error = action.error.message;
};
