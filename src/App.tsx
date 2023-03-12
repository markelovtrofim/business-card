import React, {FC} from 'react';
import './App.css'; // @ts-ignore
import logo from "./assets/imgs/logo.jpg"; // @ts-ignore
import linkedin from "./assets/imgs/linkedin.png"; // @ts-ignore
import github from "./assets/imgs/github.png"; // @ts-ignore
import spotify from "./assets/imgs/spotify.png"; // @ts-ignore
import twitter from "./assets/imgs/twitter.png"; // @ts-ignore
import instagram from "./assets/imgs/instagram.png"; // @ts-ignore
import './App.css';

type Link = {
    url: string,
    icon: string,
    text: string
}

const contacts: Link[] = [
    {text: "business", icon: linkedin, url: "https://www.linkedin.com/in/trofim-markelov-539687255"},
    {text: "development", icon: github, url: "https://github.com/markelovtrofim"},
    {text: "soul", icon: spotify, url: "https://open.spotify.com/user/mr1zf2p6194ohhylcbt5f488t"},
    {text: "thoughts", icon: twitter, url: "https://twitter.com/TrofimMarkelov"},
    {text: "pictures", icon: instagram, url: "https://www.instagram.com/markelovtrofim"}
]

const Link: FC<Link> = ({url, icon, text}) => (
    <a href={url} target="_blank" className="link">
        <img className="link_img" src={icon} alt={text}/>
        <div className="link_text text">{text}</div>
    </a>
);

const App = () => {
    return (
        <div>
            <div className="container">
                <div className="header">
                    <img className="logo" src={logo} alt=""/>
                    <p className="title text">Markelov Trofim</p>
                </div>
                <div className="links">
                    {contacts.map((contact) => <Link url={contact.url} icon={contact.icon} text={contact.text}/>)}
                </div>
                <div style={{textAlign: "center"}}>
                    <iframe
                        className="video"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="nothing text">
                    “Warning: If you are reading this then this warning is for you.
                    Every word you read of this useless fine print is another second
                    off your life. Don't you have other things to do? Is your life so
                    empty that you honestly can't think of a better way to spend these
                    moments? Or are you so impressed with authority that you give respect
                    and credence to all that claim it? Do you read everything you're supposed
                    to read? Do you think every thing you're supposed to think? Buy what you're
                    told to want? Get out of your apartment. Meet a member of the opposite sex.
                    Stop the excessive shopping and masturbation. Quit your job. Start a fight.
                    Prove you're alive. If you don't claim your humanity you will become a statistic.
                    You have been warned.”
                </div>
            </div>
        </div>
    );
};

export default App;
