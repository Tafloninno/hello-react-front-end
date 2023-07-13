import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/messagesSlice';

const Greetings = () => {
  const greetings = useSelector((store) => store.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>My greetings</h1>
      <h2>{greetings.message}</h2>
    </div>
  );
};

export default Greetings;
