import { useState } from 'react';
import '../App.css';

export default function Form(props) {
    const del = {
        height: "90px",
        width: "40vw",
    };

    const mesBox = {
        border: "2px solid white",
        borderRadius: "10px",
        padding: "4px",
        margin: "5px",
        minHeight: "14vh",
        minWidth: "37vw",
        maxWidth: "31vw",
        overflowY: 'scroll',
        resize: 'vertical',
    };

    const [resData, setResData] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const id = formData.get('id');
  const key = formData.get('key');
  const message = formData.get('message');
  const isPost = props.head === "Encrypt Data";
  let payload = { id, key };
  if (isPost) payload.message = message;
  try {
    let response;
    if (isPost) {
      response = await fetch('https://crypt-ease.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } else {
      const params = new URLSearchParams(payload).toString();
      response = await fetch(`https://crypt-ease.onrender.com/?${params}`, {
        method: 'GET',
      });
    }
    const data = await response.json();
    const firstKey = Object.keys(data)[0];
    setResData(data.result || data[firstKey]); // update this line based on your Django response

  } catch (error) {
    console.error('Error:', error);
    setResData('Error occurred while fetching data');
  }
};



    return (
        <form onSubmit={handleSubmit}>
            <h1>{props.head}</h1>

            <p className="formEle">
                {props.first}: <input type="text" name="id" required />
            </p>

            {props.second}: <input type="text" name="key" required />

            <p className="formEle"></p>

            {(props.head === "Encrypt Data") ? (
                <p className="formEle">
                    Message: <textarea style={del} name="message" required />
                </p>
            ) : (
                <p className="formEle">
                    {resData ? <>
                        Message:
                        <div style={mesBox}>{resData}</div>
                    </> : <br />}
                </p>
            )}

            <button type="submit" id="Submit">
                {props.message}
            </button>
        </form>
    );
}
