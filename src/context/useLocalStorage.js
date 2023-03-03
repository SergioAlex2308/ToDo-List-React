import React from "react";

function useLocalStorage(itemName, initialValue) {

	const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

	const { error, loading, item,} = state;

	// Action creators
	const onError = (error) => {dispatch({ 
		type: actionTypes.error, 
		payload: error });
	};
	const onSuccess = (item) => {dispatch({ 
		type: actionTypes.success, 
		payload: item });
	};
	const onSave = (item) => {dispatch({ 
		type: actionTypes.save, 
		payload: item });
	};

	/* const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);

	const [item, setItem] = React.useState(initialValue); */

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}
				onSuccess(parsedItem)
				// setItem(parsedItem);
				// setLoading(false);
			} catch (error) {
				onError(error);
			}
		}, 1000);
	});

	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem)
			// setItem(newItem);
			onSave(newItem);
		} catch (error) {
			onError(error);
		}
	};

	return {
		item,
		saveItem,
		loading,
		error
	};
}
const initialState = ({initialValue}) => ({
	error: false,
	loading: true,
	item: initialValue,
});
const actionTypes = {
	error: 'ERROR',
	success: 'SUCCESS',
};

const reducerObject = (state, payload) => ({
	[actionTypes.error]: {
		...state,
		error: true,
	},
	[actionTypes.success]: {
		...state,
		error: false,
		loading: false,
		item: payload,
	},
	[actionTypes.save]: {
		...state,
		item: payload,
	},
});

const reducer = (state, action) => {
	return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };