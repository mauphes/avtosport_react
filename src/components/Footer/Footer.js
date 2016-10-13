import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>

      </div>
    </div>
  );
}

export default withStyles(s)(Footer);
