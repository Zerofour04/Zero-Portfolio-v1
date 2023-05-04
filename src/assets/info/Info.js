import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Ben',
  lastName: 'Ho',
  initials: '04', // the example uses first and last, but feel free to use three or more if you like.
  position: 'aka Zerofour04',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🌍',
      text: 'München, Deutschland',
    },
    {
      emoji: '💻',
      text: 'Front-End- und Web-Entwickler mit Leidenschaft',
    },
    {
      emoji: '🧑‍💻',
      text: 'Projektleiter in diversen Gaming-Projekten',
    },
    {
      emoji: '👥',
      text: 'Beteiligt an der Entwicklung von Unternehmenssoftware',
    },
    {
      emoji: '🎮',
      text: 'Leidenschaftlicher Gamer & Schüler',
    },
    {
      emoji: '📧',
      text: 'ho.ben2004@gmail.com',
    }
  ],
  socials: [
    {
      link: 'https://github.com/Zerofour04',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://twitter.com/Zerofour_04_',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  bio: [
    "Hallo, mein Name ist Ben Ho und ich bin seit einigen Jahren leidenschaftlicher Entwickler. Während dieser Zeit habe ich zahlreiche Projekte entwickelt und mich auch auf die Verbesserung bestehender Repositories konzentriert. Um meine Arbeit mit anderen zu teilen, veröffentliche ich meine Codes auf GitHub. Ich habe auch die Möglichkeit gehabt, an verschiedenen IT-Projekten teilzunehmen, die meine Fähigkeiten und Kenntnisse verbessert haben und mich auf meinem Karriereweg vorangetrieben haben.",
    
  ],

  bioFriends: [
    "Mit meinen Freunden teile ich nicht nur viele unvergessliche Erlebnisse, sondern auch das Leben selbst. Hier sind einige Impressionen von mir und meinen Freunden:"
  ],

  bioPhotography: [
    "Neben dem Fotografieren von Landschaften und besonderen Ereignissen habe ich eine Leidenschaft für Autos entwickelt, insbesondere für BMW-Fahrzeuge. Ich suche ständig nach schicken Modellen, um die besten Schnappschüsse zu machen. Ich filme und fotografiere sie in Aktion und bearbeite dann die Aufnahmen. Schließlich teile ich meine Arbeit auf Social-Media-Plattformen, um meine Begeisterung für BMW und Autos im Allgemeinen mit anderen zu teilen."
  ],

  bioProjects: [
    "In der Vergangenheit hatte ich die Möglichkeit, an zahlreichen Projekten als Leiter oder Mitentwickler mitzuwirken. Einige dieser Projekte waren sogar für Unternehmen bestimmt. Durch das Veröffentlichen des Codes konnte ich vielen Menschen helfen und meine Erfahrungen mit anderen teilen:"
  ],

  bioCommunity: [
    "Seit ich damit begonnen habe, meinen Code zu veröffentlichen, habe ich eine Community aufgebaut, die anderen bei ihren Projekten hilft. Inzwischen hat die Community bereits über 3000 Mitglieder gewonnen, was mir auch in einigen Spielen, insbesondere in FiveM, einen gewissen Ruf eingebracht hat."
  ],

  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    Languages: [
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>,
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>,
      <img src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white" alt="LUA"/>,
      <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#"/>,
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>,
      <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" alt="Java"/>,
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript"/>,
      <img src="https://img.shields.io/badge/MySQL-FFBE00?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
    ],
    Frameworks_Library: [
      <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootsrap"/>,
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>,
      <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM"/>,
      <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux"/>,
      <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white" alt="Nodejs"/>
    ],
    Programms: [
      <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="Visual Studio Code"/>,
      <img src="https://img.shields.io/badge/VSStudio2022-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white" alt="Visual Studio 2022"/>,
      <img src="https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=WebStorm&logoColor=whit" alt="Webstorm"/>,
      <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>,
      <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>,
      <img src="https://img.shields.io/badge/Notepad++-90E59A.svg?style=for-the-badge&logo=notepad%2B%2B&logoColor=black"/>,
      <img src="https://img.shields.io/badge/OperaGX-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white" alt="Git"/>
    ],
    Workflows: [
      <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="Trello"/>,
      <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" alt="Jira"/>,
      <img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white" alt="Dev.to"/>
    ],
    Servers: [
      <img src="https://img.shields.io/badge/Azure_DevOps-0078D7?style=for-the-badge&logo=azure-devops&logoColor=white" alt="Azure"/>,
      <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="VERCEL"/>,
      <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku"/> ,
      <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows"/>,
      <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux"/>,
      <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" alt="JSON"/>
    ],
    Components: [
      <img src="https://img.shields.io/badge/NVIDIA-GTX-76B900?style=for-the-badge&logo=nvidia&logoColor=white" alt="Nvidia"/>,
      <img src="https://img.shields.io/badge/Intel-Core-0071C5?style=for-the-badge&logo=intel&logoColor=white" alt="Intel"/>,
      <img src="https://img.shields.io/badge/Windows-11-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows"/>
    ],
  },
  hobbies: [
    {
      label: 'Car-Spotting',
      emoji: '🏎️',
    },
    {
      label: 'Programmieren lernen',
      emoji: '🧑‍💻',
    },
    {
      label: 'Sportliche Aktivitäten ausüben',
      emoji: '⚽',
    },
    {
      label: 'Bücher über Informatik und Naturwissenschaft lesen',
      emoji: '📖',
    },
    {
      label: 'Gaming',
      emoji: '🎮',
    },

    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Mitarbeitermanagement für eine Firma',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      info: 'Mit diesem Mananagementsystem konnte man Leute in den Urlaub schicken, sperren, unsichtbar und als Mitarbeiter setzten, dabei erfolgte die Abfrage über Azure mit MSAL.',
      source: 'https://github.com/Zerofour04/React-TS-Employee-Management', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://user-images.githubusercontent.com/60815764/163386840-d28988b6-b940-40d5-b895-39da54b34e18.png',
    },
    {
      title: 'Einfache ToDoList (First project)',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      info: 'Ich habe eine ToDo-Liste mit React erstellt und sie mit einem Backend integriert.',
      source: 'https://github.com/Zerofour04/React-JS-ToDoList', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://user-images.githubusercontent.com/60815764/149533575-6b37141e-4ec4-4910-9cff-a8fb75664794.png',
    },
    {
      title: 'Abi-Fahrt Website für die Klasse',
      info: 'Ein Blog über unsere Klassenfahrt nach dem Abitur, der alle wichtigen Informationen für die Klasse zusammenfasst. Das Projekt hatte vor allem einen Lernzweck.', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      site: 'https://feed.zerofour04.me/',
      source: 'https://github.com/Zerofour04/simple-blog', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://media.discordapp.net/attachments/517028743357792258/1103637740601479178/2023-05-04.png',
    },
    {
      title: 'Microsoft Authentication Library Template',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      info: 'Ich habe eine React-Vorlage für MSAL (Microsoft Authentication Library) entwickelt.',
      source: 'https://github.com/Zerofour04/React-TS-MSAL', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://www.vifani.com/msal-one-library-to-authenticate-them-all/what-is-msal.jpg',
    },
    {
      title: 'Spotify Connect',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      info: 'Eine Beispiel-App auf React-Basis, die einen neuen Player in Spotify Connect erstellt, um Musik über den Browser mit dem Spotify Web Playback SDK abzuspielen.',
      source: 'https://github.com/Zerofour04/spotify-web-playback-sdk-example', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://venturebeat.com/wp-content/uploads/2018/11/IMG_20181107_043334.jpg?fit=1256%2C719&strip=all',
    },
    {
      title: 'Computerspiel mit Java programmiert',
      live: 'https://zerofour04.github.io/Greenfoot-game/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      site: 'https://www.greenfoot.org/scenarios/31279',
      source: 'https://github.com/Zerofour04/Greenfoot-game', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://media.discordapp.net/attachments/517028743357792258/1103081864782172201/Title.png',
    },
    {
      title: 'Weitere meiner Spielprojekte sind auf GitHub zu finden.',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      info: null,
      source: null, // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://media.discordapp.net/attachments/517028743357792258/1103082533446483968/04Bild.png',
    },

  ],
};
