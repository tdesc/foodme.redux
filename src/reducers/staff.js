
import immutable from "object-path-immutable";

let initialState = {
    name: 'users',
	ready: false,	
	items: {},

	dictionary:{
    }
};


export default function staff(state = initialState, action) {
  
    if( action.name !== state.name)
        return state;
    // console.log("#staff", action)
    switch(action.type){
       
        case 'SET_COLLECTION':
        {
            let collection = action.items;

            return {
                ...state,
                items: {            
                    ...collection                                    
                    }                    
                }                 
        }
        case 'COLLECTION_ADDED':
        {
           let path = 'items.'+ action.id;
           return immutable.set(state, path, _.extend({_id: action.id},action.fields))
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
