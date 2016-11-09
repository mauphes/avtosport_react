import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import { Grid, Row, Col } from 'react-bootstrap';

function Header() {
  return (
      <Grid className={cx("container-fluid", s.header)}>
          <Row className="container">
              <div className={s.logo}>
                  <Link to="/">
                      <img src="/img/logo.png" alt="Logo" />
                  </Link>
              </div>
              <a href="#" className={s.burger} />
              <Navigation />
          </Row>
      </Grid>
  );
}

export default withStyles(s)(Header);
