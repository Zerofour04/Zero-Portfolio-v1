import React from 'react';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import { info } from '../../assets/info/Info';
import avatar from './avaterBen.png';
import avatarBusiness from './businesspicture.png';

import IMG1 from './images/IMG_1.JPG'
import IMG2 from './images/IMG_2.jpeg'
import IMG3 from './images/IMG_3.PNG'
import IMG4 from './images/IMG_4.jpeg'


export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat about{firstName}{' '}
        </p>
        <img src={avatar} width="50%"></img>
        <img src={avatarBusiness} width="50%"></img>

        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.bio}

        </p>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={'span'} mr={'1rem'}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  function friendsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd friends
        </p>

        <p>
          <span style={{ color: info.baseColor }}>
            Freunde <span className={Style.green}>(main)</span> $
          </span>{' '}
          {info.bioFriends}
          <img src={IMG1} width='50%'></img>
          <img src={IMG2} width='50%'></img>
          <img src={IMG3} width='50%'></img>
          <img src={IMG4} width='50%'></img>

        </p>
      </>
    );
  }

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
      <Terminal text={aboutMeText()} />
      <Terminal text={miscText()} />
      <Terminal text={friendsText()} />

    </Box>
  );
}
