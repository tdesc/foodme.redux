
import immutable from "object-path-immutable";

let initialState = {
    name: 'categories',
	ready: false,	
	items: {},

	dictionary:{
    }
};


export default function categories(state = initialState, action) {
  
    if( action.name !== 'categories')
        return state;
    // console.log("#categories", action)
    switch(action.type){
       
        case 'SET_COLLECTION':
        {

            return {
                ...state,
                items: {     
                    ...state.items,
                    ...action.items                                    
                    }                    
                }                 
        }

        case 'COLLECTION_ADDED':
        {
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: _.extend({_id: action.id},action.fields)                                                                                         
                } 
            }   
        }
        case 'COLLECTION_REMOVED':
        { 
            let path = 'items.'+ action.id;            
            return immutable.del(state, path);
        }
        case 'COLLECTION_CHANGED':
        {
           let path = 'items.'+ action.id;                       
           return immutable.assign(state, path, action.fields);
        } 
        case 'SUBSCRIPTION_READY':
        {          
            return Object.assign({}, state, { ready: action.payload.ready });
        }                                      
        default:
          return state;
      }   
}
