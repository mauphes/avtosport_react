import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <div role="navigation">
        <ul className={s.main_nav}>
            <li>
                <Link to="/">Главная</Link>
            </li>
            <li>
                <Link to="/services">Услуги</Link>
            </li>
            <li>
                <Link to="/projects">Проекты</Link>
            </li>
            <li>
                <Link to="/contacts">Контакты</Link>
            </li>
            <li>
                <Link to="/our_team">Наша команда</Link>
            </li>
            <li>
                <Link to="/video_blog">Видеоблог</Link>
            </li>
            <li>
                <Link to="/articles">Мы в автоспорте</Link>
            </li>
        </ul>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(s)(Navigation);
