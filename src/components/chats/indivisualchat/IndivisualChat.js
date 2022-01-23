import React from 'react';
import '../chat.scss';
import { FiMoreVertical } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { FiSend } from 'react-icons/fi';
import { GrAttachment } from 'react-icons/gr'

const IndivisualChat = () => {
    const inputFileRef = React.useRef();
    const onBtnClick = () => {
        /*Collecting node-element and performing click*/
        inputFileRef.current.click();
    };
    return <div className='indivisualChat'>
        <div className='Inchatheader'>
            <div className='profile'>
                <img src='https://yt3.ggpht.com/ytc/AKedOLQk-wJOw3-BXhP1Z0K1j4TsP14ZVkTVt3zsl8dlXA=s900-c-k-c0x00ffffff-no-rj' alt='profileimg' />
                <h1>Gaurav</h1>
            </div>
            <div className='moreoption'>
                <FiMoreVertical size='2rem' style={{ color: 'white', margin: "0 1.5rem" }} />
                <ImCross size='2rem' style={{ color: 'white', margin: "0 1.5rem" }} />
            </div>

        </div>
        <div className='InchatContent'>
            <div className='messages'>new</div>
            <div className='sendOption'>
                <form className="message-form" onSubmit={''}>
                    <input
                        className="message-input"
                        placeholder="Send a message..."

                    />
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                        ref={inputFileRef}
                    />
                    <button className="attachment" onClick={onBtnClick}>
                        <GrAttachment size='2rem' />
                    </button>


                    <button type="submit" className="send-button">
                        <FiSend className="send-icon" size='2rem' />
                    </button>
                </form>
            </div>
        </div>
    </div >;
};

export default IndivisualChat;
