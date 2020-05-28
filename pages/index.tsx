import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { sendMessage, deleteMessage } from '../store/actions';
import { NextPage } from 'next';

const HomePage: NextPage = () => {

  const dispatch = useDispatch();
  const appState = useSelector(state => state, shallowEqual); // use any any compare / memo algorithm

  const msg = () => dispatch(sendMessage("Hello Redux"));
  const del = () => dispatch(deleteMessage());

  return (
    <>
      <div>Hello Next</div>
      <hr />
      <button onClick={msg}>Dispatch</button>
      <button onClick={del}>Remove</button>
      <hr />
      <div>{JSON.stringify(appState, null, 2)}</div>
    </>
  );

};

export default HomePage;
