
import immutable from "object-path-immutable";

let initialState = {
    name: 'additions',
	ready: false,	
	items: {},

	dictionary:{
    }
};


export default function additions(state = initialState, action) {
  
    if( action.name !== 'additions')
        return state;
    // console.log("#additions", action)
    switch(action.type){
       
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
