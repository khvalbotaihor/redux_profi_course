import React, {useEffect} from 'react';
import './App.css';
import {userSlice} from "./store/reducers/UserSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer_2 from "./components/PostContainer_2";

function App() {
/*  const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  useEffect(() => {
    dispatch(fetchUsers())
  },[])*/

  return (
    <div className="App">
{/*      {isLoading && <h1>Loading .....</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}*/}
        <div style={{display: 'flex'}}>
            <PostContainer />
            <PostContainer_2 />
        </div>
    </div>
  );
}

export default App;
