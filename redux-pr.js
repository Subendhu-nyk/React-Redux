const redux=require('redux');

const counterReducer =(state={counter:0},action)=>{
// return {
//     counter:state.counter-1
// }
if (action.type === 'INCREMENT') {
    return { counter: state.counter + 2 };
} else if (action.type === 'DECREMENT') {
    return { counter: state.counter - 2 };
} else {
    return state;
}
}
const store=redux.createStore(counterReducer);

const counterSubscriber=()=>{
   const latestState= store.getState();
   console.log(latestState)
}

store.subscribe(counterSubscriber)
// store.dispatch({type: 'decrement'})
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
store.dispatch({ type: 'INCREMENT' }); 
store.dispatch({ type: 'DECREMENT' });

