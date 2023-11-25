import React, { useState } from 'react';

const ConRender = ({ rounded, hideName, avatarSrc, name }) => {
    let [chng, setChng] = useState(false)
    let [hide, SetHide] = useState(false)
    let [input, setInput] = useState("")
    rounded = chng
    hideName = hide

    let inputValu = (e) => {
        console.log(input);
        setInput(e.target.value)

    }

    let clickChng = () => {
        setChng(!rounded)
        SetHide(!hideName)
    }



    return (
        <div>
            <div>
                {rounded ? (
                    <img
                        src={avatarSrc}
                        alt="avatar"
                        style={{ borderRadius: '50%', width: '150px', height: '150px' }}
                    />
                ) : (
                    <img
                        src={avatarSrc}
                        alt="avatargdgagiyg"
                        style={{ borderRadius: '1rem', width: '100px', height: '100px' }}
                    />
                )}
            </div>
            <label> Enter Name :
                <input
                    type="text"
                    placeholder='enter name'
                    value={input}
                    onChange={inputValu}
                />
                <h1> Name:
                    {hideName ? `${input}` : ``}
                </h1>
            </label>

            <button onClick={clickChng}>ChngImage</button>
        </div>
    );

};
export default ConRender;
