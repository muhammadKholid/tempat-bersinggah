import { SEND_EMAIL } from './Types';

export const sendEmail = (data) => {
  return (dispatch, _) => {
    fetch(`https://thawing-temple-34028.herokuapp.com/send-mail`, {
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
