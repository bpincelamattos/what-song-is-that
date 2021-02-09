import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

export default function Playlist (props) {

    const renderPlaylist = props.playlist.map((song) => {
        if(song === undefined){
            return <p className="list-text" key={props.playlist.indexOf(song)}>ARTIST - TITLE</p>
        } else{
            return <li className="list-text" key={props.playlist.indexOf(song)}>
                        <FontAwesomeIcon className="icon"icon={faHeadphones}/>{song.artist} - {song.title}    
                   </li>
        }
    });

    return (
        <div >
            <h2 className="font">Did you like a song and don't know who sings iyt ? Here is the playlist!</h2>
            <ul className="fa-ul">
                {renderPlaylist}
            </ul>
        </div >
    )
}
