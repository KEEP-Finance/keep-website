import styles from './index.less';
import { ReactComponent as Market } from './market.svg';
import { useLayoutEffect } from 'react';
export default function IndexPage() {
  return (
    <div className={styles.market}>
      <div className="wrapper">
        <p className="title">Play with background-clip text</p>
        <div className="clip-text clip-text_one">JINTOS</div>
      </div>
    </div>
  );
}
