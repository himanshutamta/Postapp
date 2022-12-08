export const add_Category = (data) => {
    return{
        type: "ADD_CATEGORY",
        payload:{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const addPosts = (postdata) => {
    return{
        type:"ADD_POST",
        payload: { 
            id: new Date().getTime().toString(),
            data: postdata
        }
    }
}

export const addComment = (data) => {
    return{
        type:"ADD_COMMENT",
        payload: {
            id: data.id,
            data: data.comment
        }
    }
}