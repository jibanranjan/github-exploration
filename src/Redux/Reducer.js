

const initialData ={
    users:[],
    repositor:[],
    isLogin:false,
}


const basicReducer =(storedata = initialData, action)=>{
  
     if(action.type==="users"){
        return{...storedata,
            users:action.payload}
     }

     else if(action.type==="repositor"){
        return{...storedata,
            repositor:action.value}
     }


     else if(action.type==="isLoginValue"){
        return{...storedata,
            isLogin:action.logInValue}
     }

     


    return storedata;
};

export default basicReducer;

