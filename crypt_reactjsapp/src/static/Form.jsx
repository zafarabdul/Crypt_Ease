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
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResData('');
        setErrorMsg('');
        setSuccessMsg('');
        const formData = new FormData(e.target);
        const id = formData.get('id')?.trim();
        const secKey = formData.get('key')?.trim();
        const eMessage = formData.get('message')?.trim();

        const isPost = props.head === "Encrypt Data";
        const payload = { id, secKey };
        if (isPost) payload.eMessage = eMessage;

        // const Link = 'http://127.0.0.1:8000/';
        const Link = 'https://crypt-ease.onrender.com/';
        if (!/^\d+$/.test(secKey)) {
          setErrorMsg('Secret Number should contain digits only (0–9)');
          return;
        }
        else if(id.length>12){
          setErrorMsg('Id length Should Be Less Than 12');
          return;
        }

        try {
            setLoading(true);
            let response;
            if (isPost) {
              if (!id || !secKey || !eMessage) {
              setErrorMsg("All fields are required");
              return;
              }
                response = await fetch(Link, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                  });
                  setLoading(true);
                  const data = await response.json();
                  if (!response.ok) {
                    setErrorMsg(data.data);
                  }
                  else{
                    setSuccessMsg(data.data);
                  }
              return;
            } else {
                const params = new URLSearchParams(payload).toString();
                response = await fetch(`${Link}?${params}`, {
                    method: 'GET',
                });
            }

            setLoading(true);
            const data = await response.json();
            if (!response.ok) {
              const firstError = data.error;
              setErrorMsg(firstError);
              return;
            }
            
            if (data.error === 0) {
              setErrorMsg(data.data);
            }
            else {
              if(data.data === 'Not Found'){
                setErrorMsg(data.data);
                return;
              }
              setResData(data.data);
              setSuccessMsg('Data Retrived');
            }
        } catch (error) {
            setErrorMsg('Network error or server unreachable ❌');
        }
        finally {
          setLoading(false);
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
            {(errorMsg)? <div className="error-msg">{errorMsg}</div>:<></>}
            {(successMsg)? <div className="success-msg">{successMsg}</div>:<></>}
            <div disabled={loading}>
              {loading ? "Please wait..." : ""}
            </div>

        </form>
    );
}
