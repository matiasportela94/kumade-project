import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Logo from '../../components/Logo';
import { Column } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useFadedShadowStyles  } from '@mui-treasury/styles/shadow/faded';
import MaestroCard from "../../assets/images/maestro.png";
import CardBackground from "../../assets/images/creditCardBg.png";

const family = 'Raleway';

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    borderRadius: 50,
    padding: 12,
    backgroundImage:`url(${CardBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: 240,
    minWidth: 300,
  },
  img: {
    position: 'absolute',
    width: '20%',
    bottom: 10,
    right: 30,
    display: 'block',
  },
  valid: {
    color: '#48bbb5',
    fontFamily: family,
    fontSize: '0.8em',
    fontWeight: 500,
    position: 'absolute',
    top: 190,
    left: 30,
  },
}));

const useOfferInfoStyles = makeStyles(() => {
  return {
    title: {
      color: '#000000',
      fontFamily: family,
      fontSize: '1.5em',
      fontWeight: 700,
      position: 'absolute',
      top: 120,
      left: 30,
    },
    subtitle: {
      color: '#48bbb5',
      fontFamily: family,
      fontSize: '1em',
      fontWeight: 500,
      position: 'absolute',
      top: 150,
      left: 30,
    }
  };
});

const DebitCard = React.memo(function OfferCard() {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  return (
    <>
      <Card className={cx(styles.card, shadowStyles.root)}>
        <Column gap={2} mr={2}>
          <Logo />  
          <Info position={'bottom'} useStyles={useOfferInfoStyles}>
            <InfoTitle>0000 0000 0000 0000</InfoTitle>
            <InfoSubtitle>MATIAS GERM PORTELA</InfoSubtitle>
            <p className={styles.valid}>VALID THRU: 04/25</p>
          </Info>
        </Column>
        <img
          className={styles.img}
          alt={''}
          src={ MaestroCard }
        />
      </Card>
    </>
  );
});

export default DebitCard;