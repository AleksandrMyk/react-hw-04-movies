import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: { textAlign: 'center' },
  status: { fontSize: 96, marginBottom: 16 },
};

const NotFound = () => (
  <div style={styles.container}>
    <h1 style={styles.status}>404</h1>
    <img
      src="https://s3.tproger.ru/uploads/2015/04/pic08.jpg"
      alt="404"
      width="640"
    />
    <p>
      Такой страницы нет. Вернитесь <Link to="/">домой</Link>.
    </p>
  </div>
);

export default NotFound;
