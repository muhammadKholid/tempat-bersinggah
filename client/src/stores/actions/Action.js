import { SEND_EMAIL } from './Types';

export const sendEmail = (data) => {
  return (dispatch, _) => {
    fetch(`http://localhost:3001/send-mail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        let message = data.message;
        dispatch({
          type: SEND_EMAIL,
          payload: message,
        });
      });
  };
};
