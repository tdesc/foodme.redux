
import immutable from "object-path-immutable";

let initialState = {
    name: 'orders',
    ready: false,	
    active: false,

    act1: "wow",
    act2: 'wow2',
	items: {},

	dictionary:{
    }
};


export default function orders(state = initialState, action) {
  
    if( action.name !== 'orders')
        return state;
    // console.log("#orders", action)
    switch(action.type){
        
        case 'TEST_ACTIVE':
        {
           return {
               ...state,
               active: action.active
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
