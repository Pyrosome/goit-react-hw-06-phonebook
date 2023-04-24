import { useSelector, useDispatch } from 'react-redux'
import { getClicksValue, update } from 'redux/clicksSlice';


export const App = () => {
  
  const value = useSelector(getClicksValue)
  const dispatch = useDispatch();
  
  return (
    <div style={{margin: '10px'}}>
       
      <p>Number of clicks : { value }</p>
      <button type="button" onClick={() => dispatch(update(-5))}> -5 </button>
      <button type="button" onClick={() => dispatch(update(5))}> +5 </button>
      <button type="button" onClick={() => dispatch(update(20))}> +10 </button>

    </div>
  );
};
