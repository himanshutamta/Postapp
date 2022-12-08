const comments = {
    list: []
}

const addCommentReducer = (state=comments, action) => {
    switch (action.type){
        case "ADD_COMMENT":
            const mycomment = [...state.list];
            const{id,data} = action.payload; 
            mycomment.push({id:id,data:data})
            return{
                ...state,
                list : mycomment
               }
               default: return state
    }
}

export default addCommentReducer;