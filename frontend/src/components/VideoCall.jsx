import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';  // Import Socket.IO client

// Connect to backend Socket.IO server
const socket = io('http://localhost:4000');  

const VideoCall = ({ roomId, userId }) => {
    const localVideoRef = useRef(null);  // Reference for the local video
    const remoteVideoRef = useRef(null); // Reference for the remote video
    const [stream, setStream] = useState(null);  // Store local media stream

    // Get local media stream (camera and mic)
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(localStream => {
                setStream(localStream);  // Store the stream
                if (localVideoRef.current) {
                    localVideoRef.current.srcObject = localStream;  // Set the stream to local video element
                }
            })
            .catch(error => console.error('Error accessing media devices:', error));
    }, []);

    // Join room and set up listeners
    useEffect(() => {
        socket.emit('join-room', { roomId, userId });  // Join the room

        socket.on('user-connected', (remoteUserId) => {
            console.log('User connected:', remoteUserId);
            // Here you can set up a WebRTC connection to the remote user.
        });

        return () => {
            socket.off('user-connected');  // Clean up listeners
        };
    }, [roomId, userId]);

    return (
        <div className="video-call-container">
            <div className="local-video">
                <video ref={localVideoRef} autoPlay muted playsInline />
            </div>
            <div className="remote-video">
                <video ref={remoteVideoRef} autoPlay playsInline />
            </div>
        </div>
    );
};

export default VideoCall;
