import React from 'react';
import avatar from './avatar.png'

const Avatar = ({ isMobile }) => {
  return <img src={avatar} alt="André" style={{ width: isMobile ? '100%' : '300px', borderRadius: '50%' }} ></img>
};

export default Avatar;