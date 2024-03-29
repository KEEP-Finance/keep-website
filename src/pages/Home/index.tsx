import { useLayoutEffect, useState } from 'react';
import Market from '../Market';
import Card from '../Card';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Github } from '@/assets/github.svg';
import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { ReactComponent as Discord } from '@/assets/discord.svg';
import { ReactComponent as Medium } from '@/assets/medium.svg';
import { ReactComponent as Telegram } from '@/assets/telegram.svg';
import { ReactComponent as Youtube } from '@/assets/youtube.svg';
import { ReactComponent as Paper } from '@/assets/gitbook.svg';
import styles from './index.less';
const IndexPage = () => {
  const [hide, setHide] = useState(false);
  useLayoutEffect(() => {
    var mySwiper = new Swiper('.swiper', {
      // direction: 'vertical', // 垂直切换选项
      // loop: true, // 循环模式选项
      effect: 'fade',
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChangeTransitionStart: function () {
          setHide(this.activeIndex == 1);
        },
      },
    });
  }, []);
  return (
    <div>
      <svg style={{ display: 'none' }} height="0" width="0">
        <symbol id="twitter" viewBox="0 0 800 800">
          <path d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z" />
        </symbol>
        <symbol id="dribble" viewBox="0 0 800 800">
          <path d="M400 665c-146 0-265-119-265-265s119-265 265-265 265 119 265 265-119 265-265 265zm223-229s-69-22-140-9c30 81 43 161 43 161s82-49 97-152zM488 609s-15-90-48-172c-132 44-179 142-179 142s96 83 227 30zm-256-57c80-128 193-152 193-152s-12-27-19-39c-124 37-232 32-232 32s-8 87 58 159zm-54-198s102 2 210-28c-38-71-84-130-84-130-107 49-126 158-126 158zm169-174s50 65 85 134c84-31 118-83 118-83s-76-78-203-51zm102 167c6 11 20 44 20 44s64-11 157 7c0-85-51-141-51-141s-38 55-126 90z" />
        </symbol>

        <symbol id="codepen" viewBox="0 0 800 800">
          <path d="M140 482V320q0-10 10-18l238-158q12-8 24 0l238 158q9 6 10 19v158q0 10-10 19L412 656q-12 8-24 0L150 497q-9-6-10-15zm282-278v104l97 65 78-52zm-44 104V204L203 321l78 52zm-193 54v75l56-37zm193 234V492l-97-65-78 52zm22-143l79-53-79-53-79 53zm22 143l175-117-78-52-97 64v105zm193-159v-75l-56 38z" />
        </symbol>
      </svg>
      <div className='customheader'>
        <Logo className="logo" />
        <div  onClick={() => window.open('https://app.keep.finance/')} className="appbtn">
          <div className="gets">Get started</div>
            <svg className="fill-current" width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 8.41992C16.5 8.20554 16.4052 8.00831 16.2329 7.84538L10.5118 2.16003C10.3395 1.9971 10.1586 1.91992 9.9518 1.91992C9.52962 1.91992 9.19359 2.22863 9.19359 2.65739C9.19359 2.86319 9.27114 3.069 9.40899 3.19763L11.339 5.15277L14.2426 7.78536L12.1575 7.65673L1.25821 7.65673C0.810178 7.65673 0.500001 7.97401 0.500001 8.41992C0.500001 8.86583 0.810178 9.18311 1.25821 9.18311L12.1575 9.18311L14.234 9.05449L11.339 11.6871L9.40899 13.6422C9.27114 13.7794 9.19359 13.9767 9.19359 14.1825C9.19359 14.6112 9.52962 14.9199 9.9518 14.9199C10.1586 14.9199 10.3395 14.8513 10.5291 14.6627L16.2329 8.99446C16.4052 8.83153 16.5 8.6343 16.5 8.41992Z"></path></svg>
        </div>
        {/* <button className="fill" style={{ cursor: 'pointer' }} onClick={() => window.open('https://app.keep.finance/')}>GET STARTED</button> */}
      </div>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Market />
          </div>
          <div className="swiper-slide">
            <Card />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {!hide && (
        <div className="h11">
          <ul>
            <li>
              <span data-text="&nbsp;&nbsp;The&nbsp;Most&nbsp;Efficient&nbsp;Banking&nbsp;Protocol">
                &nbsp;&nbsp;The&nbsp;Most&nbsp;Efficient&nbsp;Banking&nbsp;Protocol&nbsp;
              </span>
            </li>
          </ul>
        </div>
      )}

      <div className={styles.connect}>
        <a target='_blank' href="https://keep-finance.gitbook.io/keep-finance/" title="Gitbook">
          <Paper />
        </a>
        <a target='_blank' href="https://github.com/KEEP-Finance" title="Github">
          <Github />
        </a>
        <a target='_blank' href="https://twitter.com/Keep_Finance" title="Twitter">
          <Twitter />
        </a>
        <a target='_blank' href="https://t.me/Keep_Finance" title="Telegram">
          <Telegram />
        </a>
        {/* <a href="#" title="Discord">
          <Discord />
        </a>
        <a href="#" title="Medium">
          <Medium />
        </a>
        <a href="#" title="Youtube">
          <Youtube />
        </a> */}
      </div>
      <div className="blockauto"></div>
    </div>
  );
};

export default IndexPage;
