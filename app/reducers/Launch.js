const STATE = {
  Launch : {},
  error : undefined
}

export default function LAUNCH(state = STATE, action) {
  switch(action.type){
    case 'LAUNCH_REQUEST':
      return {
        ...state
      };
    case 'LAUNCH_SUCCESS':
      return {
        ...state,
        Launch : action.result,
        error : undefined
      };
    case 'LAUNCH_FAILURE':
      return {
        ...state,
        Launch : {},
        error : action.error
      };
    default:
      return state;
  }
}
