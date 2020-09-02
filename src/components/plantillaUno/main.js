import React from 'react';
import { Body } from '../../styles/globalStyles';
import {
  BodyTitle,
  Dash,
  Card,
  MiniCard,
  PetInfo,
  Text,
  Image,
} from '../../styles/plantillaUnoStyle';
import Pett from '../../assets/images/dog.png';

const Main = () => (
  <Body>
    <BodyTitle>
      <h1>Home</h1>
    </BodyTitle>
    <Dash>
      <h2>Dashboard</h2>
      <Card>
        <MiniCard>
          <Image img={Pett} />
        </MiniCard>
        <PetInfo>
          <Text>
            American Pit Bull Terrier
          </Text>
          <h3>
            Milou
          </h3>
          <Text>
            6 months old
          </Text>
        </PetInfo>
        <MiniCard>2</MiniCard>
      </Card>
    </Dash>
  </Body>
);

export default Main;
