import React,{useState}  from 'react';
import Pagination from './MovePage/Pagination';
import Profile from './UserProfileLIst/ProfileList';

function App() {
  const [state, setstate] = useState(1);
 
  return (
    <div>
      <Profile  state={state}/>
      <Pagination setstate={setstate} state={state}/>
    </div>
  );
}

export default App;