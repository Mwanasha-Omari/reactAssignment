import Login from "./Login";
import Users from "./Users";
import Modal from "./Modal"

export const Introduction=()=>{
return <h2>What Is React?</h2>;

};

const App=()=>{
 return(
  <div>
   <Login/>
   {/* <Users/> */}
   {/* <Modal/> */}
  </div>
 ) 
}
export default App;
