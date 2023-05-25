import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import Style from '../about/About.module.scss';

import Terminal from '../about/Terminal';

import { Box, Grid } from '@mui/material';
import { info } from '../../assets/info/Info';

import { MarkdownBlock, MarkdownSpan, MarkdownElement } from "md-block";

export default function Portfolio() {
  const firstName = info.firstName.toLowerCase();

  const skillsSection = (skill) => {
    const keyName = Object.keys(skill)[0];
    const values = skill[keyName];

    return (
      <div key={keyName}>
        <p style={{ color: info.baseColor }}> {keyName}</p>
        <ul className={Style.skills}>
          {values.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };

  function projectText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat projects from {firstName}{' '}
        </p>

        <p>
          <span style={{ color: info.baseColor }}>
            Community/Prestige <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.bioCommunity}

        </p>
        <iframe src="https://discord.com/widget?id=705701139936706601&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
       
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd skills
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        {Object.keys(info.skills).map((key) => {
          return skillsSection({ [key]: info.skills[key] });
        })}

        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd successfulProjects
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Projekte <span className={Style.green}>(main)</span> $
          </span>{' '}
          {info.bioProjects}
        </p>
      </>
    );
  }

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
        <Terminal text={skillsText()} />
        <Terminal text={projectText()} />
      </Box>

      <Box>
        <Grid container display={'flex'} justifyContent={'center'}>
          {info.portfolio.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PortfolioBlock
                image={project.image}
                live={project.live}
                info={project.info}
                source={project.source}
                title={project.title}
                site={project.site}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

    </>
  );
}