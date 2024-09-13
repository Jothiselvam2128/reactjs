import react ,{useState} from'react';
function Counter(){
    const [count,SetCount]=useState(0);
  return(
    <div>
        <p>count: {count}</p>
        <button onClick={() => SetCount(count+1)}> Increase </button>
        <button onClick={() => SetCount(count-1)}> Decrease </button>  
        
    </div>
  );
}
export default Counter;