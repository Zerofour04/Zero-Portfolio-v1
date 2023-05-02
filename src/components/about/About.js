import React from 'react';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { info } from '../../assets/info/Info';
import avatar from './avaterBen.png';
import avatarBusiness from './businesspicture.png';



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
            Hobbies/Interessen <span className={Style.green}>(main)</span> $
          </span>{' '}

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

    const itemData = [
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063307499339938/IMG_1.JPG',
        title: 'Sonnenuntergang',
        author: 'Freiham',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063307809730570/IMG_7919.jpeg',
        title: 'Basketball',
        author: 'Freiham abends',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063308115918949/IMG_7921.jpeg',
        title: 'Schicker 1er',
        author: 'Freiham Parkplatz',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063309051248690/IMG_4.jpeg',
        title: 'Basketball',
        author: 'Freiham',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063308740866119/IMG_5.jpeg',
        title: 'Getränke kaufen',
        author: 'Einkaufsladen',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063308426280992/IMG_9194.jpeg',
        title: 'Freund im Urlaub',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063353238237254/IMG_7684.jpeg',
        title: 'Pizza nach BMW Welt',
        author: 'Olympiapark',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063309525188688/IMG_2.jpeg',
        title: 'Nachts im Auto',
        author: 'im VW Touran',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063355498967140/IMG_7445.JPG',
        title: 'Dart spielen',
        author: 'beim Freund',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063354886590505/IMG_6255.jpeg',
        title: 'Geburtstag feiern',
        author: 'beim Freund',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063354530082936/IMG_5808.jpeg',
        title: 'Kleine entspannte Runde',
        author: 'im Keller',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103063355834503228/IMG_7496.jpeg',
        title: 'Sonnenuntergang',
        author: 'Germansberg',
      },
    ];

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
        </p>

        <ImageList >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </>
    );
  }

  function photographyText() {
    const itemData = [
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103069274081337364/IMG_7676.jpeg',
        title: 'BMW Welt',
        author: 'München',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103069276115574825/IMG_7674.jpeg',
        title: 'Neue Mobilität',
        author: 'BMW Weltz',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103069274521731223/IMG_7693.jpeg',
        title: 'Neuer elektrischer 4er BMW',
        author: '4er-Reihe',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103069275075399772/IMG_7694.jpeg',
        title: 'Neuer i7',
        author: '7er-Reihe',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103069275830374550/IMG_7701.jpeg',
        title: 'Schöner M3',
        author: 'Kundenplattform',
      },
      {
        img: 'https://media.discordapp.net/attachments/517028743357792258/1103069275448680549/IMG_7696.jpeg',
      },
    ];
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd photography
        </p>

        <p>
          <span style={{ color: info.baseColor }}>
            Schnappschussfotograf: <span className={Style.green}>(main)</span> $
          </span>{' '}
          {info.bioPhotography}
        </p>
        <ImageList >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </>
    );
  }

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
      <Terminal text={aboutMeText()} />
      <Terminal text={miscText()} />
      <Terminal text={friendsText()} />
      <Terminal text={photographyText()} />
    </Box>
  );
}
