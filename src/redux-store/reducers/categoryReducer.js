const cateState = {
    list : [
        {id:11, data:{title:"Sports",desc:"about sports"}},
        {id:12, data:{title:"Food",desc:"about Foods"}}
    ]
}

const categoryReducer = (state = cateState, action) => {
    switch (action.type){
       case "ADD_CATEGORY":
        const {id, data} = action.payload;
        const value = [...state.list];
        value.push({id:id, data:data})
        console.log(...state.list)
        return{
            ...state,
            list:value
        }
        default: return state;
    }
}

export default categoryReducer;