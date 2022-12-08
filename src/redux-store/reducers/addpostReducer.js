const addState = {
    list: [
        {
            id:13,
            data:{inputs: 'Cricket', paragraph: 'I love cricket', category: 'Sports'}
        },
        {
            id:14,
            data:{inputs: 'Ice-cream', paragraph: 'I love Ice-cream', category: 'Food'}
        }
    ]
}

const addpostReducer = (state=addState, action) => {
    switch(action.type){
        case "ADD_POST":
           const myposts = [...state.list];
           const{id, data} = action.payload; 
           myposts.push({id:id, data:data})
           console.log(...state.list);
           return{
            ...state,
            list : myposts
           }
           default: return state
    }
}

export default addpostReducer;