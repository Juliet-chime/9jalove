import React from 'react'
import "./chat.css"
import ChatSideBar from "../../component/Chatsidebar/index"
import InputField from '../../component/InputField/input'
import search from "../../asset/img/search.svg"
import jane from "../../asset/img/jane.svg"
import gallery from "../../asset/img/gallery.svg"
import camera from "../../asset/img/camera.svg"
import pin from "../../asset/img/pin.svg"
import emoji from "../../asset/img/emoji.svg"

const Chat = () => {
    return (
      <ChatSideBar>
          <div className="row nearby-row">
          <div className="col-md-8 c0l-sm-12">
           <div className="chat-online-display">
           <img src={jane} alt="" />
           <div>
           <h2>Jane Cooper</h2>
           <p>Online</p>
           </div>
           </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="nearinput">
              <InputField
                customStyles={{
                  borderRadius: "8px",
                  background: "#F2F2F2",
                }}
              />
              <p className="nearinputtext">
                <img src={search} alt=""></img>
                &nbsp; Search by name or username
              </p>
            </div>
          </div>
        </div>

        <section className="chatmsgholder">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="chatmsg">
                        <p>Amet minim mollit non deserunt ullamco est </p>
                    </div>
                    <p className="chattime">11:30am</p>
                </div>
                <div className="col-md-6 offset-sm-1 offset-md-2"></div>
            </div>

            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-6 offset-sm-1 offset-md-2">
                <div className="chatmsg">
                        <p>Amet minim mollit non deserunt ullamco est </p>
                    </div>
                    <p className="chattime">11:30am</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="chatmsg">
                        <p>Amet minim mollit non deserunt ullamco est </p>
                    </div>
                    <p className="chattime">11:30am</p>
                </div>
                <div className="col-md-6 offset-sm-1 offset-md-2"></div>
            </div>
        </div>
        </section>

        <section className="typing-msg-holder">
            <div className="container">
                <div className="typing-msg">
                    <img src={gallery} alt=""/>
                    <img src={camera} alt="" className="gallery" />
                    <div className="typing-input">
                        <InputField
                        placeholder="Type your message here"
                        className="inputField_Wrap chatinput"
                        />
                            <img src={pin} alt="" className="pin" /> 
                        <img src={emoji} alt="" className="emoji" />
                    </div>
                </div>
            </div>
        </section>
      </ChatSideBar>
      
    )
}

export default Chat
