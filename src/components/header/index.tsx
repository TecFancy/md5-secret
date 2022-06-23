/**
 * @description Header 组件
 */

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1>MD5在线加密</h1>
      </div>
    </header>
  );
};

export default Header;
