import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { sendMessage, deleteMessage } from '../store/actions';
import { NextPage } from 'next';
import { wrapper } from '../store/store';

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
      <pre>{JSON.stringify(appState, null, 2)}</pre>
    </>
  );

};

export default HomePage;

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  store.dispatch(sendMessage("sent from get static Props"));
  return {};
});
