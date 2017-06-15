export const loadState = (reducer) => {
	try{
		const state = localStorage.getItem(reducer);
		if(state == null){
			return null
		}
		return JSON.parse(state)
	}catch(err){
		return null
	}
}

export const saveState = (key, state) => {
	debugger;
	try{
		const serializedState = JSON.stringify(state);
		localStorage.setItem(key, serializedState)
	}catch(err){
		//
	}
}
