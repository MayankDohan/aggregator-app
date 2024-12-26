import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    addItemStatus:{},
    cartTotal:0,
    savings:0,
    totalAmount:0
    
}

const shoppingCartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addTocCart(state,action){
           
         const newItem =    action.payload
         const existingItem =    state.items.find(item=>item.type===newItem.type&&item.id===newItem.id)
            const statusKey = `${newItem.type}-${newItem.id}`;
         if(existingItem){
           
            state.addItemStatus[statusKey] = "updated"

            state.cartTotal += newItem.serviceprovide[0].price
          
           
            
            
            
          
         }
         else{
            state.items.push({
                ...newItem,
               
               
            })
            state.addItemStatus[statusKey] = "success"
            state.cartTotal += newItem.serviceprovide[0].price
            
         }
       

    
        
            

        },
        removeItem(state,action){
          const {type,id } =   action.payload
         const deleteItem =  state.items.find(item=> item.type===type&& item.id===id)
         const updatedItems =    state.items.filter(item=>!(item.type===type&&item.id===id))
            state.items = updatedItems
            const statusKey = `${type}-${id}`
            
            if (state.addItemStatus.hasOwnProperty(statusKey)) {
                delete state.addItemStatus[statusKey];
              }
              if(deleteItem){
              state.cartTotal -= deleteItem.serviceprovide[0].price
              }

        }

    } 
})


export  const shoppingCartActions = shoppingCartSlice.actions;
export default  shoppingCartSlice.reducer;