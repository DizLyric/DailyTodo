const updLS = store => {
    store.subscribe((mutation, { list }) => {
		localStorage.setItem('list', JSON.stringify(list))
    });
  };

  export default [updLS]