<template>
  <div class="wrapperMerchantDetails">
    <div
      class="firstLarge slowscroll"
      :style="{
        backgroundImage:
          'url(' +
          urlFor(merch.largeFirstImage.asset._ref).url() +
          '?w=2560&h=1144&fit=crop' +
          ')',
      }"
    >
      <!-- <div class="gradient"></div> -->
    </div>
    <div class="infoWrapper">
      <div :style="{ 'max-width': cfs.length === 1 ? '1600px' : 'none' }">
        <div class="info">
          <div class="mainInfo">
            <div
              class="textInfo"
              :style="{
                'padding-right':
                  cfs.length === 1 && windowWidth > 780
                    ? '3vw !important'
                    : '0',
              }"
            >
              <h2 class="customh2">Welcome to</h2>
              <span class="smallerH1">
                <h1 class="customh1">
                  {{ merch.title }}
                </h1>
              </span>
              <div class="map">
                <portableImage
                  :asset="merch.map.asset"
                  :style="{ height: merch.links ? '90%' : '100%' }"
                />
                <ul v-if="merch.links" class="links">
                  <li class="title">LINKS:</li>
                  <li v-for="link in merch.links" :key="link._key" class="link">
                    <a :href="link.url" target="_blank">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
              <SanityContent
                :blocks="merch.description"
                :serializers="serializers"
              />
            </div>
          </div>
          <div v-if="merch.description2" class="additionalInfo">
            <SanityContent
              v-if="merch.description2"
              class="firstAdd"
              :style="{
                width: merch.description3 ? '50%' : '100%',
                'padding-right':
                  merch.description3 && windowWidth > 780
                    ? '3vw'
                    : '0 !important',
              }"
              :blocks="merch.description2"
              :serializers="serializers"
            />
            <SanityContent
              v-if="merch.description3"
              class="secondAdd"
              :blocks="merch.description3"
              :serializers="serializers"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="cfs.length >= 1" class="wheelWrapper">
      <inputsCrowdWheel
        id="buy"
        name="buy"
        :cfs="cfs"
        :new-index="newIndex"
        @infoClicked="scrollTo"
      />
    </div>
    <div
      class="secondLarge slowscroll"
      :style="{
        backgroundImage:
          'url(' +
          urlFor(merch.largeSecondImage.asset._ref).url() +
          '?w=2560&h=1144&fit=crop' +
          ')',
      }"
    ></div>
    <div class="quote fade-in">
      <span class="smallerH1">
        <h1 class="customh1">{{ merch.quote }}</h1>
      </span>
    </div>
    <!-- <div
      v-for="cf in cfs"
      :id="cf.slug.current + 'details'"
      :key="cf.slug.current"
      class="crowdDetails"
      :name="cf.slug.current + 'details'"
    >
      <div class="wrapper fade-in">
        <h2 class="customh2">About</h2>
        <h1 class="customh1">{{ cf.variety }}</h1>
        <div class="mainInfo">
          <div class="textWrapper">
            <div class="vintage">
              <h3 class="customh3">{{ cf.vintage }} Vintage</h3>
              <button
                class="button"
                @click="
                  () => {
                    newIndex = cfs.indexOf(cf);
                    scrollTo('buy');
                  }
                "
              >
                BUY &#8599;
              </button>
            </div>
            <SanityContent
              class="detail"
              :blocks="cf.detail1"
              :serializers="serializers"
            />
            <SanityContent
              class="detail"
              :blocks="cf.detail2"
              :serializers="serializers"
            />
            <SanityContent
              class="detail"
              :blocks="cf.detail3"
              :serializers="serializers"
            />
          </div>
          <div class="sideInfo">
            <div class="profile">
              <h3 class="customh3">Taste Profile</h3>
              <div class="progressWrapper">
                BODY
                <div class="progressBar">
                  <span
                    class="value"
                    :style="{
                      width: cf.body + '%',
                    }"
                  >
                  </span>
                </div>
              </div>
              <div class="progressWrapper">
                ACIDITY
                <div class="progressBar">
                  <span
                    class="value"
                    :style="{
                      width: cf.acidity + '%',
                    }"
                  >
                  </span>
                </div>
              </div>
              <div class="progressWrapper">
                FRUITINESS
                <div class="progressBar">
                  <span
                    class="value"
                    :style="{
                      width: cf.fruitiness + '%',
                    }"
                  >
                  </span>
                </div>
              </div>
            </div>

            <div class="artworkWrapper">
              <portableImage class="artwork" :asset="cf.artwork.asset" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div> -->
    <inputsScrollTop />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import imageUrlBuilder from '@sanity/image-url';
import { SanityProjectDetails } from '@sanity/image-url/lib/types/types';
import * as defTypes from '~/assets/ts/Types/defaultTypes';
import { getMerchantDetailBySlug } from '~/assets/ts/CMSApi/merchantApiFunctions';
import { getBaseCrowdfundInfoForMerchant } from '~/assets/ts/CMSApi/saleApiFunctions';
import portableImage from '~/components/portableTextComps/portableImage.vue';
import portableLink from '~/components/portableTextComps/portableLink.vue';
import portableYT from '~/components/portableTextComps/portableYT.vue';

export default Vue.extend({
  name: 'MerchantDetails',
  async asyncData({ app: { $sanity }, route }) {
    const merch: defTypes.MerchantDetails = await getMerchantDetailBySlug(
      route.params.merchant,
      $sanity
    );

    const cfs: defTypes.CrowdfundBase[] = await getBaseCrowdfundInfoForMerchant(
      merch._id,
      $sanity
    );

    return { merch, cfs };
  },
  data: () => ({
    serializers: {
      types: {
        image: portableImage,
        youtube: portableYT,
      },
      marks: {
        link: portableLink,
      },
    },
    merch: {} as defTypes.MerchantDetails,
    cfs: [] as defTypes.CrowdfundBase[],
    newIndex: -1 as Number,
    windowWidth: 0,
  }),
  head() {
    return {
      title: 'Minerva Wine',
    };
  },
  mounted() {
    this.addScrollAnim();
    this.slowerImageSCroll();
  },
  beforeMount() {
    this.windowSizeUpdater();
    window.addEventListener('scroll', this.slowerImageSCroll);
    window.addEventListener('resize', this.windowSizeUpdater);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowSizeUpdater);
    window.removeEventListener('scroll', this.slowerImageSCroll);
  },
  methods: {
    windowSizeUpdater() {
      const viewportWidth: number = window.innerWidth;
      this.windowWidth = viewportWidth;
    },
    slowerImageSCroll() {
      const slowsscrollers = this.$el.querySelectorAll('.slowscroll');

      slowsscrollers.forEach((entry) => {
        const target = entry as HTMLElement;
        if (target) {
          const offset = 1;
          // const viewportWidth: number = window.innerWidth;

          // For respecting aspect ratio between stated widths to not repeat image on top or bottom
          // if (viewportWidth <= 1583 && viewportWidth >= 1298) {
          //   offset = 0.0035087719298246 * viewportWidth - 4.5543859649123;
          // }

          // Between that not/hardly possible without next image bars
          // if (viewportWidth >= 1298 || viewportWidth <= 530) {

          const scrolltotop = target.getBoundingClientRect().top;
          const xvalue = 'center';
          const factor = 0.2;
          let yvalue = scrolltotop * factor;

          // 50% for center y-axis
          // Somehow css doesn't like double negation
          if (yvalue < 1 && yvalue > -1) {
            target.style.backgroundPosition =
              xvalue + ' ' + 'calc(-' + yvalue * offset + 'px + 40%)';
          } else {
            yvalue = -yvalue;
            target.style.backgroundPosition =
              xvalue + ' ' + 'calc(' + yvalue * offset + 'px + 40%)';
          }
          // } else {
          //   target.style.backgroundPosition = 'center';
          // }
        }
      });
    },
    scrollTo(id: String) {
      const el = document.querySelector('#' + id) as HTMLElement;

      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth',
      });
    },
    urlFor(src: string) {
      const builder = imageUrlBuilder(
        this.$sanity.config as SanityProjectDetails
      );
      return builder.image(src);
    },
    addScrollAnim() {
      const faders = this.$el.querySelectorAll('.fade-in');
      const sliders = this.$el.querySelectorAll('.slide-in');

      const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -120px 0px',
      };

      const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
      ) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions);

      faders.forEach((fader) => {
        appearOnScroll.observe(fader);
      });

      sliders.forEach((slider) => {
        appearOnScroll.observe(slider);
      });
    },
  },
});
</script>

<style lang="scss">
.wrapperMerchantDetails {
  background-color: white;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  height: 100%;
  position: relative;
  // top: -127px;

  p {
    font-size: max(1.3em, 16px);
  }

  .firstLarge {
    height: 580px;
    background-size: auto 130%;
    width: 100%;
    background-attachment: scroll;

    @media screen and (min-width: 1700px) {
      background-size: cover;
    }

    @media screen and (max-width: 1050px) {
      height: 40vw;
      min-height: 250px;
    }

    // .gradient {
    //   height: 100%;
    //   width: 100%;
    //   background-image: linear-gradient(
    //     180deg,
    //     rgba(60, 60, 60, 0.623) 0%,
    //     rgba(255, 255, 255, 0) 30%
    //   );
    // }
  }

  .infoWrapper {
    padding: calc(84px + 3vw) 108px calc(84px + 3vw) 167px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1300px) and (min-height: 950px),
      screen and (max-width: 1150px) and (min-height: 901px),
      screen and (max-width: 1100px) {
      padding: calc(44px + 5vw) 6vw calc(24px + 3vw) 7vw;
    }

    @media screen and (max-width: 1000px) and (min-height: 950px),
      screen and (max-width: 800px) and (min-height: 901px),
      screen and (max-width: 780px) {
      padding: calc(44px + 5vw) 6vw calc(24px + 3vw) 6vw;
    }

    .info {
      width: 100%;
      max-width: 1600px;

      @media screen and (min-width: 2000px) {
        max-width: 1800px;
      }

      .mainInfo {
        display: grid;
        grid-template-columns: 50% 50%;
        position: relative;
        min-height: 500px;

        @media screen and (max-width: 1300px) and (min-height: 950px),
          screen and (max-width: 1150px) and (min-height: 901px),
          screen and (max-width: 1100px) {
          display: inline-block;
          min-height: 0px;
        }

        .textInfo {
          padding-right: 3vw !important;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          @media screen and (min-width: 2000px) {
            padding-right: 4vw !important;
          }

          @media screen and (max-width: 1300px) and (min-height: 950px),
            screen and (max-width: 1150px) and (min-height: 901px),
            screen and (max-width: 1100px) {
            display: block;
          }

          @media screen and (max-width: 1000px) and (min-height: 950px),
            screen and (max-width: 800px) and (min-height: 901px),
            screen and (max-width: 780px) {
            display: flex;
            flex-direction: column;
            padding-right: 0 !important;
          }

          .smallerH1 {
            font-size: 0.9em;

            .customh1 {
              color: $main;
              margin-bottom: 40px;
              width: 100%;
              word-wrap: break-word;

              @media screen and (max-width: $fifth-incr) {
                margin-bottom: 5vw;
              }
            }
          }
        }

        .map {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          right: 0;
          width: 50%;
          overflow: hidden;
          padding-left: 3vw;
          box-sizing: border-box;

          @media screen and (max-width: 1300px) and (min-height: 950px),
            screen and (max-width: 1150px) and (min-height: 901px),
            screen and (max-width: 1100px) {
            position: relative;
            float: right;
            left: auto;
            right: auto;
            bottom: auto;
            top: auto;
            margin-bottom: 3vw;
            margin-left: 3vw;
            min-width: 400px;
          }

          @media screen and (max-width: 1000px) and (min-height: 950px),
            screen and (max-width: 800px) and (min-height: 901px),
            screen and (max-width: 780px) {
            float: none;
            order: 10;
            width: 87vw;
            margin-left: 0;
            margin-bottom: 20px;
            margin-left: 0;
            padding: 40px 2px 0 2px;
            box-sizing: border-box;
            min-width: 0;
          }

          div {
            width: 100%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              overflow: hidden;
            }
          }

          .links {
            width: 100%;
            height: 9%;
            background-color: #ffffff;
            border-bottom: 1px solid #e9e9e9;
            margin-top: -1px;
            display: flex;
            align-items: center;
            overflow-x: scroll;
            padding-top: 7px;
            box-sizing: border-box;

            * {
              scrollbar-width: thin;
              scrollbar-color: #c7c7c7 #ffffff;
            }

            &::-webkit-scrollbar-track {
              border-radius: 10px;
              background-color: #ffffff;
            }

            &::-webkit-scrollbar {
              height: 4px;
              background-color: #ffffff;
            }

            &::-webkit-scrollbar-thumb {
              border: 0px solid #ffffff;
              border-radius: 20px;
              background-color: #e9e9e9;
            }

            .title {
              color: #777;
            }

            li {
              list-style: none;
              margin-right: 40px;
              margin-bottom: 0;

              a {
                text-decoration: none;
                color: $secondary;
              }
            }
          }
        }
      }
    }

    .additionalInfo {
      margin-top: 70px;
      display: flex;

      @media screen and (max-width: 1300px) and (min-height: 950px),
        screen and (max-width: 1150px) and (min-height: 901px),
        screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
      }

      @media screen and (max-width: 1000px) and (min-height: 950px),
        screen and (max-width: 800px) and (min-height: 901px),
        screen and (max-width: 780px) {
        margin-top: 10px;
      }

      .secondAdd {
        width: 50%;
        box-sizing: border-box;
        padding-left: 3vw;

        @media screen and (max-width: 1300px) and (min-height: 950px),
          screen and (max-width: 1150px) and (min-height: 901px),
          screen and (max-width: 1100px) {
          padding-left: 0;
        }
      }

      .firstAdd {
        box-sizing: border-box;

        @media screen and (min-width: 2000px) {
          padding-right: 4vw !important;
        }
      }

      .firstAdd,
      .secondAdd {
        @media screen and (max-width: 1300px) and (min-height: 950px),
          screen and (max-width: 1150px) and (min-height: 901px),
          screen and (max-width: 1100px) {
          width: 100% !important;
          margin: 0;
        }
      }
    }

    p {
      margin: 5px 0px 5px 0px;
      color: #333;
      min-height: 1em;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased !important;
      -moz-font-smoothing: antialiased !important;
      text-rendering: optimizelegibility !important;
      letter-spacing: 0.05em;
      line-height: 1.4;
    }

    h4 {
      font-size: 1.7em;
    }

    h3 {
      font-size: 2em;
    }

    h4 {
      font-size: 2.2em;
    }

    ul {
      font-size: 1.5em;
      color: #333;

      li {
        margin-bottom: 12px;
        max-width: min(30em, 65vw);
      }
    }
  }

  .quote {
    padding: min(11vw, 160px) calc(4vw + 20px) min(13vw, 180px) calc(4vw + 20px);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    text-align: center;

    .smallerH1 {
      font-size: 0.6em;

      .customh1 {
        line-height: 1.2;
        max-width: 1500px;
        color: #444;
      }
    }
  }

  .secondLarge {
    height: 650px;
    background-size: auto 150%;
    width: 100%;
    background-attachment: scroll;

    @media screen and (min-width: 1950px) {
      background-size: cover;
    }

    @media screen and (max-width: 1050px) {
      height: 60vw;
      min-height: 350px;
    }

    @media screen and (max-width: 800px) {
      background-size: auto 160%;
    }

    @media screen and (max-width: 716px) {
      background-size: auto 165%;
    }

    @media screen and (max-width: 680px) {
      background-size: auto 170%;
    }

    @media screen and (max-width: 655px) {
      background-size: auto 175%;
    }

    @media screen and (max-width: 625px) {
      background-size: auto 180%;
    }

    @media screen and (max-width: 600px) {
      background-size: auto 185%;
    }
  }

  .crowdDetails {
    color: #333;
    padding: calc(34px + 3vw) 108px calc(94px + 3vw) 147px;
    display: flex;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 950px) and (min-height: 950px),
      screen and (max-width: 880px) and (min-height: 901px),
      screen and (max-width: 770px) {
      padding: calc(34px + 3vw) 50px calc(94px + 3vw) 60px;
    }

    @media screen and (max-width: $fourth-incr) {
      padding: calc(34px + 3vw) 20px calc(94px + 3vw) 25px;
    }

    .wrapper {
      padding-top: 50px;
    }

    hr {
      position: absolute;
      bottom: 0;
      height: 1px;
      color: #b4b4b4;
      background-color: #b4b4b4;
      width: 50%;
      border-width: 0px;

      @media screen and (max-width: $fourth-incr) {
        width: 80%;
      }
    }

    h1 {
      font-size: 6em;
      width: 45%;

      @media screen and (max-width: 1500px) and (min-height: 950px),
        screen and (max-width: 1400px) and (min-height: 901px),
        screen and (max-width: 1300px) {
        width: 55%;
      }

      @media screen and (max-width: 1300px) and (min-height: 950px),
        screen and (max-width: 1200px) and (min-height: 901px),
        screen and (max-width: 1100px) {
        width: 100%;
      }
    }

    .mainInfo {
      display: grid;
      grid-template-columns: 50% 40%;
      column-gap: 8vw;
      max-width: 1600px;

      @media screen and (min-width: 2000px) {
        max-width: 1900px;
        column-gap: 12vw;
        grid-template-columns: 48% 38%;
      }

      @media screen and (max-width: 1500px) and (min-height: 950px),
        screen and (max-width: 1400px) and (min-height: 901px),
        screen and (max-width: 1300px) {
        grid-template-columns: 55% 35%;
      }

      @media screen and (max-width: 1300px) and (min-height: 950px),
        screen and (max-width: 1200px) and (min-height: 901px),
        screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
      }

      .textWrapper {
        display: flex;
        flex-direction: column;

        .vintage {
          display: flex;
          align-items: center;
          margin-top: 20px;

          button {
            min-width: 0;
            padding-left: 26px;
            padding-right: 26px;
            height: 59px !important;
            font-size: 1em;
            margin-left: 30px;

            @media screen and (max-width: 1330px),
              screen and (max-height: 950px) {
              height: 52px !important;
            }

            @media screen and (max-width: 1180px),
              screen and (max-height: 900px) {
              height: 49px !important;
            }

            @media screen and (max-width: $third-incr) {
              height: 42px !important;
            }

            @media screen and (max-width: 525px) {
              padding-left: 20px !important;
              padding-right: 20px !important;
              min-width: 0 !important;
              min-height: 0 !important;
            }
          }
        }

        .detail {
          margin-top: 50px;

          @media screen and (max-width: 700px) {
            margin-top: 20px;
          }
        }
      }

      .sideInfo {
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 1300px) and (min-height: 950px),
          screen and (max-width: 1200px) and (min-height: 901px),
          screen and (max-width: 1100px) {
          flex-direction: row;
          justify-content: space-between;
          margin-top: 5vw;
        }

        @media screen and (max-width: $fourth-incr) {
          flex-direction: column;
        }

        h3 {
          margin-bottom: 30px;
          margin-top: 20px;
        }

        .profile {
          @media screen and (max-width: 1300px) and (min-height: 950px),
            screen and (max-width: 1200px) and (min-height: 901px),
            screen and (max-width: 1100px) {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          @media screen and (max-width: 670px) {
            width: 45%;
          }

          @media screen and (max-width: 600px) {
            width: 42%;
          }

          @media screen and (max-width: $fourth-incr) {
            width: 100%;
          }

          .progressWrapper {
            margin-bottom: 30px;

            .progressBar {
              margin-top: 5px;
              width: 100%;
              border-radius: 0;
              height: 5px;
              position: relative;
              background-color: #e9e9e9;
              display: flex;

              .value {
                height: 100%;
                background-color: $secondary;
                display: inline-block;
              }
            }
          }
        }

        .artworkWrapper {
          width: 100%;
          height: 70%;
          margin-top: 20px;

          @media screen and (max-width: 1300px) and (min-height: 950px),
            screen and (max-width: 1200px) and (min-height: 901px),
            screen and (max-width: 1100px) {
            width: 40%;
          }

          @media screen and (max-width: 670px) {
            width: 45%;
          }

          @media screen and (max-width: 600px) {
            width: 49%;
          }

          @media screen and (max-width: $fourth-incr) {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .artwork {
            height: 100%;

            @media screen and (max-width: $fourth-incr) {
              width: 95%;
            }

            img {
              object-fit: contain;
              width: 100%;
            }
          }
        }
      }
    }
  }

  .customh3 {
    color: inherit;
  }

  h1 {
    color: $main;
  }
}
</style>