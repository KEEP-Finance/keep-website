import { useLayoutEffect } from 'react';
import Market from '../Market';
import Card from '../Card';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import styles from './index.less';

const IndexPage = () => {
  useLayoutEffect(() => {
    var mySlider = {
      config: {
        slider: '.slider-content',
        activeSlide: '.slide.active',
        footerButtons: '.footer-wrapper .box',
        bgPicture: '.image-mask img',
        nav: '.control-nav',
        position: {
          x: 350,
          alpha: 1,
        },
        nextPosition: {
          x: 150,
          alpha: 1,
        },
      },

      init: function (config) {
        this.canvasInit();
        $(mySlider.config.footerButtons).click(function () {
          mySlider.changeButton($(this));
        });
      },

      canvasInit: function () {
        var canvas = $('.canvas')[0];
        var ctx = canvas.getContext('2d');
        var w = $(mySlider.config.activeSlide).width();
        var h = $(mySlider.config.activeSlide).height();
        var img = document.createElement('IMG');
        img.src =
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/mask-karlie.jpg';
        var position = {
          x: 150,
          alpha: 1,
        };

        if (window.matchMedia('(min-width: 860px)').matches) {
          position = {
            x: 200,
            alpha: 1,
          };
        }

        if (window.matchMedia('(min-width: 1200px)').matches) {
          position = {
            x: 250,
            alpha: 1,
          };
        }

        canvas.width = w;
        canvas.height = h;
        mySlider.drawMask(canvas, ctx, position, img);
      },

      drawMask: function (canvas, ctx, position, img) {
        var w = $(mySlider.config.activeSlide).width();
        var h = $(mySlider.config.activeSlide).height();
        var cy = 50;
        var mStroke = 25;
        var mWidth = 180;
        var mHeight = 300;

        if (window.matchMedia('(min-width: 860px)').matches) {
          mStroke = 35;
          cy = 80;
          mWidth = 260;
          mHeight = 380;
        }

        if (window.matchMedia('(min-width: 1200px)').matches) {
          mStroke = 40;
          cy = 120;
          mWidth = 360;
          mHeight = 460;
        }

        ctx.globalAlpha = position.alpha;
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.beginPath();
        ctx.rect(position.x, cy, mWidth, mStroke);
        ctx.clip();
        ctx.drawImage(img, 0, 0, w, h);
        ctx.restore();

        ctx.save();
        ctx.rect(position.x, cy, mStroke, mHeight);
        ctx.clip();
        ctx.drawImage(img, 0, 0, w, h);
        ctx.restore();

        ctx.save();
        ctx.rect(position.x + mWidth, cy, mStroke, mHeight);
        ctx.clip();
        ctx.drawImage(img, 0, 0, w, h);
        ctx.restore();

        ctx.save();
        ctx.rect(position.x, cy + (mHeight - mStroke), mWidth, mStroke);
        ctx.clip();
        ctx.drawImage(img, 0, 0, w, h);
        ctx.restore();
      },

      changeSlide: function (id) {
        var activeSlide = $(mySlider.config.activeSlide);
        var newSlide = $(mySlider.config.slider).find(
          '[data-order="' + id + '"]',
        );

        this.animateSlide(activeSlide, newSlide);
        this.createMask(activeSlide, newSlide);
      },

      changeNav: function (id) {
        var activeNav = $(mySlider.config.nav).find('li');

        activeNav.removeClass('active');
        activeNav.eq(id - 1).addClass('active');
      },

      changeButton: function (el) {
        var activeButton = $(mySlider.config.slider).find('.box.active');
        var target = el.data('id');

        if (!el.hasClass('active')) {
          activeButton.removeClass('active');
          el.addClass('active');
          this.changeSlide(target);
          this.changeNav(target);
        }
      },

      createMask: function (active, newSlide) {
        //   var currentCanvas = active.find('.canvas')[0];
        //   var nextCanvas = newSlide.find('.canvas')[0];
        //   var position = mySlider.config.position;
        //   var positionNext = mySlider.config.nextPosition;
        //   var currentctx = currentCanvas.getContext('2d');
        //   var nextctx = nextCanvas.getContext('2d');
        //   var w = $(mySlider.config.activeSlide).width();
        //   var h = $(mySlider.config.activeSlide).height();
        //   var currentImg = document.createElement('IMG');
        //   var nextImg = document.createElement('IMG');
        //   var movex = 200;
        //   var position = {
        //     x: 350,
        //     alpha: 1,
        //   }
        //   var nextPosition = {
        //     x: 150,
        //     alpha: 1,
        //   }
        //   TweenMax.set(positionNext, { x: "150" });
        //   if (window.matchMedia("(min-width: 860px)").matches) {
        //     position = {
        //       x: 400,
        //       alpha: 1,
        //     };
        //     nextPosition = {
        //       x: 200,
        //       alpha: 1,
        //     };
        //     movex = 200;
        //     TweenMax.set(positionNext, { x: "200" });
        //   }
        //   if (window.matchMedia("(min-width: 1200px)").matches) {
        //     position = {
        //       x: 450,
        //       alpha: 1,
        //     };
        //     nextPosition = {
        //       x: 250,
        //       alpha: 1,
        //     };
        //     movex = 200;
        //     TweenMax.set(positionNext, { x: "250" });
        //   }
        //   currentImg.src = active.find('canvas').data('image');
        //   nextImg.src = newSlide.find('canvas').data('image');
        //   currentCanvas.width = nextCanvas.width = w;
        //   currentCanvas.height = nextCanvas.height = h;
        //   TweenMax.to(newSlide.find('.canvas'), 0.3, { autoAlpha: 1, delay: 1.5 });
        //   TweenMax.to(positionNext, 0.5, {
        //     x: "-=" + movex + "", onUpdate: function () {
        //       mySlider.drawMask(currentCanvas, currentctx, positionNext, currentImg);
        //     }, onComplete: function () {
        //       TweenMax.to(active.find('.canvas'), 0.3, { autoAlpha: 0 }, "-=0.2");
        //       TweenMax.to(newSlide.find('.canvas'), 0.3, { autoAlpha: 0 }, "-=0.2");
        //     }
        //   });
        //   nextImg.onload = function () {
        //     mySlider.drawMask(nextCanvas, nextctx, positionNext, nextImg);
        //     TweenMax.to(position, 1, {
        //       x: "-=" + movex + "", delay: 1.3, onUpdate: function () {
        //         mySlider.drawMask(nextCanvas, nextctx, position, nextImg);
        //       }
        //     });
        //     console.log(position)
        //   }
      },

      animateSlide: function (active, newSlide) {
        var w = $(mySlider.config.slider).width();
        var backgroundImg = $(mySlider.config.bgPicture);
        var activeTitleBg = active.find('.title-background .mask-wrap');
        var activeMainTitle = active.find('.title-wrapper h1 .mask-wrap');
        var activeSlideContent = active.find('.slide-content');
        var activefakeBg = active.find('.fake-bg');
        var activeImageCaption = active.find('.image-caption');

        var newTitleBg = newSlide.find('.title-background .mask-wrap');
        var newTitle = newSlide.find('.title-wrapper h1 .mask-wrap');
        var newBgPicture = newSlide.data('img');
        var newfakeBg = newSlide.find('.fake-bg');
        var nextImageCaption = newSlide.find('.image-caption');
        var img = $('<img />');

        newSlide.addClass('next');

        activeMainTitle.addClass('mask-up');
        activeTitleBg.addClass('mask-down');
        activeImageCaption.addClass('mask-up');
        newTitle.addClass('mask-down');
        newTitleBg.addClass('mask-up');
        nextImageCaption.addClass('mask-down');

        TweenMax.set(activeSlideContent, { width: w });
        TweenMax.set(activefakeBg, { width: w });
        TweenMax.set(newfakeBg, { autoAlpha: 0 });

        TweenMax.to(active, 0.8, { width: '0%', ease: Power4.easeIn });
        TweenMax.to(activefakeBg, 0.3, { autoAlpha: 0, delay: 0.4 });
        TweenMax.to(backgroundImg, 0.3, { autoAlpha: 0, delay: 0.4 });

        setTimeout(function () {
          backgroundImg.remove();
          img.attr('src', newBgPicture).css('opacity', 0);

          $('.image-mask').append(img);
        }, 600);

        TweenMax.to(newfakeBg, 0.5, { autoAlpha: 1, delay: 1 });
        TweenMax.to(img, 0.5, { autoAlpha: 1, delay: 1 });

        setTimeout(function () {
          newTitle.removeClass('mask-down');
          newTitleBg.removeClass('mask-up');
        }, 800);

        setTimeout(function () {
          active.removeClass('active');
          newSlide.addClass('active').removeClass('next');
          TweenMax.set(active, { width: '100%' });
          activeMainTitle.removeClass('mask-up');
          activeTitleBg.removeClass('mask-down');
          activeImageCaption.removeClass('mask-up');
          nextImageCaption.removeClass('mask-down');
        }, 1500);
      },
    };

    function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    $(document).ready(function () {
      mySlider.init();

      var fn = debounce(function () {
        mySlider.init();
      }, 250);

      $(window).on('resize', fn);
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
      <Logo
        style={{
          width: '150px',
          position: 'absolute',
          top: '50px',
          left: '50px',
        }}
      />
      <div className="slider-content">
        <div className="slider-wrapper">
          <div className="slider-container">
            <div className="slide active" data-order="1" data-color="#EE4654">
              <Market />
              <div
                className="h11"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div className="h11">
                  <ul>
                    <li>
                      {/* <a href="#" data-text="The Most Efficient Banking Protocol">The Most Efficient Banking Protocol</a> */}
                      <span data-text="&nbsp;The&nbsp;Most&nbsp;Efficient&nbsp;Banking&nbsp;Protocol">
                        &nbsp;The&nbsp;Most&nbsp;Efficient&nbsp;Banking&nbsp;Protocol&nbsp;
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="slide blue"
              data-order="2"
              data-color="#EE4654"
              data-img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/aline-weber.png"
            >
              <Card />
            </div>

            <div
              className="slide green"
              data-order="3"
              data-color="#7ffe8e"
              data-img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/miranda-kerr-color.png"
            >
              {/* <div className="fake-bg green"></div>
              <canvas
                className="canvas"
                data-image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/mask-miranda.jpg"
              ></canvas>
              <section className="detail"></section> */}
            </div>
          </div>
        </div>
        <div className="social-icons">
          <ul>
            <li>
              <a href="https://twitter.com/mariosmaselli">
                <svg id="twitter-icon">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/mariosmaselli">
                <svg id="dribble-icon">
                  <use xlinkHref="#dribble"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/mariosmaselli/">
                <svg id="codepen-icon">
                  <use xlinkHref="#codepen"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-wrapper">
          <ul>
            <li className="active box" data-id="1">
              <div className="hover-box"></div>
              <div className="box-content"></div>
            </li>
            <li className="box" data-id="2">
              <div className="hover-box"></div>
              <div className="box-content"></div>
            </li>
            <li className="box" data-id="3">
              <div className="hover-box"></div>
              <div className="box-content"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
