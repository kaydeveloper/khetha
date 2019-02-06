import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import LevelBadge from '../LevelBadge';
import calcLevelInfo from './calcLevelInfo';


const Level = styled(Typography)`
&& {
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  color: #5f5f5f;
}

`;

const Next = styled(Typography)`
  font-size: 14px;
  color: #5f5f5f;
`;

const HeaderMenu = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 30px;

`;

const Brand = styled.img`
  padding: 24px 16px;
  height: 58.79px;
  right: 80.23%;
`;

const Text = styled.div`
  flex-grow: 1;
  text-align: right;
`;


const MenuHeader = ({ points }) => {
  const {
    level,
    remainingPoints,
  } = calcLevelInfo(0);

  return (
    <HeaderMenu>
      <LevelBadge level={points} />
      <Text>
        <Level>{level} Level</Level>
        <Next>9 points required to unlock next level</Next>
      </Text>
    </HeaderMenu>
  );
};


export default MenuHeader;
