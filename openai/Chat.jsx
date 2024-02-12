import { useState } from "react";
import "./Chat.css";
function Mainpage()
{
    const [question,setQuestion] = useState('');
    const [answer,setAnswer] = useState('');
    const [error,setError] = useState('');
    const [history,setHistory] = useState([]);
    const [show,setShow] = useState(false);
    const [select,setSelect] = useState(null);
    const handleQuestionChange = (event) =>
    {
        setQuestion(event.target.value);
    };
    function FileChange(event)
    {
        setSelect(event.target.file[0])
    }
    async function Getdata(event)
    {
        event.preventDefault();
        try
        {
            const answer = await fetch ('https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=AIzaSyAMW83h45cu6AaeLEQA97xtpNWivMztwtM',
            {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({prompt : {text : question}})
            });
            const resData = await answer.json();
            const newChatItem = { question: question, answer: resData.candidates[0].output }; // Create a new chat item
            setHistory([...history, newChatItem]); 
            setAnswer (resData.candidates[0].output);
            setError('');
            setQuestion('');
            setAnswer('');
        }catch(error){
            console.error('Error:' ,error);
            setAnswer('');
            setError('Error fetching reasponse. Please try it again');
        }
    };
    return(

        <div>
            <div className="chatgpt_flex">
                <div className="first_half">
                    <div className="align_center"><img  className= "logo" src= "photos/chatlogo.png" alt ="logo" /><h2>ChatGPT</h2></div>
                    <div className="first_overflow">
                        <div className="newchat"><img className= "plus" src ="photos/plus.png" alt ="" /> New Chat</div>
                        <div className="previouschat">
                        <button className="Browse" type="file" onChange={FileChange}>Browse</button>
                         {select && (
                            <div>
                                <p>{setSelect.name}</p>
                                <p>{setSelect.size}</p>
                                </div>
                         )}

                            <button className="preButton" onClick={() =>setShow(!show)}>Previous </button>
                            { show && (
                                <div>
                                    {history.map((chatItem, index) => (
                                    <div key={index}>
                                        <div>Question: {chatItem.question}</div>
                                        <div>Answer: {chatItem.answer}</div>
                                    </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                   
                    <div className="homemain"><img className ="home" src= "photos/home.png" alt = "" /><h4>Home</h4></div>
                    <div className="savemain"><img className ="saved" src= "photos/save.png" alt ="" /><h4>Saved</h4></div>
                    <div className="mainupgrade"><img className="upgrade" src = "photos/star.png" alt ="" /><h4>Upgrade to pro</h4></div>
                </div>
                <div className="remaining">
                    <div className="Display">
                        <img src ="/photos/logochat.png" className="logo_dis" alt ="" />
                        <h2 className="center">How Can I Help You ?</h2>
                        <div>
                                {history.map((chatItem, index) => (
                                <div key={index}>
                                    <div><div className="user_you"><b>You</b></div>
                                    <div className="Question_dis">{chatItem.question}</div></div>
                                    <div><div className="Gpt_space"> <b>GPT </b> </div>
                                    <div  className="Answer_dis">{chatItem.answer}</div></div>
                                </div>
                                ))}
                            </div>
                            {question &&(
                                <div> 
                                    <div className="user_you"><b>You</b></div>
                                    {question}</div>
                            )}
                            {answer && (
                                <div className="Answer">
                                    <div className="Gpt_space"> <b>GPT </b> </div>
                                    {answer}</div>
                            )}
                            {error &&(
                                <div>
                                    Error : {error}
                                </div>
                            )}
                    </div>
                    <div>
                        <form onSubmit={Getdata}>
                            <input
                            value={question}
                            onChange={handleQuestionChange}
                            className ="inputbar"  
                            type="text"
                            placeholder="Send a message                                                                                             ▶"  />
                        </form>
                    </div>
                        <div className="fewkindinfo" >ChatGPT can make mistakes. Consider checking important information.</div>
                </div>
                
            </div>
        </div>
    )
}
export default Mainpage;