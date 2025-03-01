<template>
  <div class="wrapperWheel noselect">
    <div
      class="arrowLeft"
      :class="{ deactivated: cfs.length <= 1 }"
      @click.prevent="scrollWheel(false)"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0526 24.6096C10.8903 24.6095 10.7317 24.5614 10.5968 24.4712C10.4619 24.381 10.3568 24.2529 10.2948 24.103C10.2327 23.9531 10.2165 23.7881 10.2482 23.629C10.2799 23.4699 10.3581 23.3237 10.4729 23.209L20.0044 13.6775L10.4729 4.14605C10.3234 3.99134 10.2408 3.78413 10.2426 3.56904C10.2445 3.35396 10.3308 3.14822 10.4829 2.99612C10.635 2.84403 10.8407 2.75776 11.0558 2.75589C11.2709 2.75402 11.4781 2.8367 11.6328 2.98613L21.7445 13.0979C21.8983 13.2517 21.9847 13.4603 21.9847 13.6778C21.9847 13.8953 21.8983 14.1039 21.7445 14.2578L11.6328 24.3695C11.5566 24.4457 11.4661 24.5061 11.3666 24.5472C11.267 24.5884 11.1603 24.6096 11.0526 24.6096Z"
          fill="white"
        />
      </svg>
    </div>
    <div
      class="wheel"
      :class="{
        arrowPressed: arrowPressed,
      }"
      :style="{
        'grid-template-columns':
          'repeat(auto-fill, calc(100%/' + displayedCfs.length + '))',
        'max-width': cfs.length <= 1 ? '1340px !important' : 'none',
      }"
    >
      <cardsCrowdCard
        v-for="cf in displayedCfs"
        :key="cf.slug.current"
        :crowd-f="cf"
        :large="
          (cfs.length <= 1 && windowWidth > 1520) ||
          (windowWidth < 1650 && windowWidth > 1520)
        "
      />
    </div>
    <div
      class="arrowRight"
      :class="{ deactivated: cfs.length <= 1 }"
      @click.prevent="scrollWheel(true)"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0526 24.6096C10.8903 24.6095 10.7317 24.5614 10.5968 24.4712C10.4619 24.381 10.3568 24.2529 10.2948 24.103C10.2327 23.9531 10.2165 23.7881 10.2482 23.629C10.2799 23.4699 10.3581 23.3237 10.4729 23.209L20.0044 13.6775L10.4729 4.14605C10.3234 3.99134 10.2408 3.78413 10.2426 3.56904C10.2445 3.35396 10.3308 3.14822 10.4829 2.99612C10.635 2.84403 10.8407 2.75776 11.0558 2.75589C11.2709 2.75402 11.4781 2.8367 11.6328 2.98613L21.7445 13.0979C21.8983 13.2517 21.9847 13.4603 21.9847 13.6778C21.9847 13.8953 21.8983 14.1039 21.7445 14.2578L11.6328 24.3695C11.5566 24.4457 11.4661 24.5061 11.3666 24.5472C11.267 24.5884 11.1603 24.6096 11.0526 24.6096Z"
          fill="white"
        />
      </svg>
    </div>
    <div v-if="cfs.length >= 2" class="dots">
      <div
        v-for="i in cfs.length"
        :key="i"
        class="dot"
        :class="{ dotSelect: cfIndexLeft === i - 1 }"
        @click="
          {
            cfIndexLeft = i - 1;
            wheelFadeOutIn();
          }
        "
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/Types/defaultTypes';

export default Vue.extend({
  name: 'CrowdfundWheel',
  props: {
    cfs: {
      type: Array,
      required: true,
    },
    newIndex: {
      type: Number,
      required: false,
      default: -1,
    },
  },
  data: () => ({
    cfsOnDisplay: 0,
    cfIndexLeft: 0,
    arrowPressed: false,
    windowWidth: 0,
  }),
  computed: {
    displayedCfs(): defTypes.CrowdfundBase[] {
      const temp = [];
      for (let i = 0; i < this.cfsOnDisplay; i++) {
        if (this.cfIndexLeft + i < this.cfs.length) {
          temp.push(this.cfs[this.cfIndexLeft + i]);
        } else {
          temp.push(this.cfs[-1 + i]);
        }
      }
      return temp as defTypes.CrowdfundBase[];
    },
  },
  watch: {
    newIndex(newIndex) {
      this.cfIndexLeft = newIndex;
      const wheel = document.querySelector('.wheel');

      if (wheel) {
        wheel.classList.add('highlight');
        setTimeout(() => {
          wheel.classList.remove('highlight');
        }, 1500);
      }
    },
  },
  mounted() {
    this.recalcDisplayedCfs();
    window.addEventListener('resize', this.recalcDisplayedCfs);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.recalcDisplayedCfs);
  },
  methods: {
    recalcDisplayedCfs() {
      const viewportWidth: number = window.innerWidth;
      this.windowWidth = viewportWidth;

      if (viewportWidth <= 1650 || this.cfs.length <= 1) {
        this.cfsOnDisplay = 1;
      } else {
        this.cfsOnDisplay = 2;
      }
    },
    scrollWheel(fwd: boolean) {
      this.wheelFadeOutIn();

      // Test if at end or start
      if (fwd) {
        this.cfs.length <= this.cfIndexLeft + 1
          ? (this.cfIndexLeft = 0)
          : this.cfIndexLeft++;
      } else {
        this.cfIndexLeft - 1 < 0
          ? (this.cfIndexLeft = this.cfs.length - 1)
          : this.cfIndexLeft--;
      }
    },
    wheelFadeOutIn() {
      this.arrowPressed = true;

      setTimeout(() => {
        this.arrowPressed = false;
      }, 10);
    },
    infoClicked(slug: String) {
      this.$emit('infoClicked', slug + 'details');
    },
  },
});
</script>

<style lang="scss">
.wrapperWheel {
  width: 100%;
  margin-bottom: calc(34px + 3vw);
  padding-bottom: 100px;
  box-sizing: border-box;
  padding-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 900px) {
    padding-left: 0px;
    margin-bottom: calc(84px + 3vw);
    padding-bottom: 100px;
    padding-top: 50px;
  }

  @media screen and (max-width: $fourth-incr) {
    padding-bottom: 18vw;
  }

  hr {
    height: 1px;
    color: #ececec;
    background-color: #ececec;
    border-width: 0;
    width: 50%;
    position: absolute;
    top: 0;
  }

  .arrowRight,
  .arrowLeft {
    background-color: $secondary;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
  }

  .arrowLeft {
    margin-right: 20px;
    margin-left: 20px;
    transform: rotate(180deg);

    @media screen and (max-width: 900px) {
      position: absolute;
      bottom: 0;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 100px;
    }
  }

  .arrowRight {
    margin-left: 20px;
    margin-right: 40px;

    @media screen and (max-width: 900px) {
      position: absolute;
      bottom: 0;
      margin-left: auto;
      margin-right: auto;
      left: 100px;
      right: 0;
    }
  }

  .deactivated {
    pointer-events: none;
    background-color: #e2e2e2;
    cursor: default;
  }

  .wheel {
    width: 85%;
    opacity: 1;
    max-width: 1640px !important;
    display: grid;
    transition: 0.2s ease opacity;
    overflow: hidden;

    @media screen and (max-width: 900px) {
      width: 100%;
    }

    & > div:first-child {
      -webkit-transition: border 0.5s linear;
      -ms-transition: border 0.5s linear;
      transition: border 0.5s linear;
      -webkit-transition: background-color 0.5s linear;
      -ms-transition: background-color 0.5s linear;
      transition: background-color 0.5s linear;
      border-left: 1px solid transparent;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

      @media screen and (max-width: 900px) {
        border-bottom: 1px solid #e0e0e0;
        border-top: 1px solid #e0e0e0;
      }
    }

    & > div:only-child {
      .soonText {
        @media screen and (max-width: 1330px) {
          padding-top: 50px;
        }
      }
    }

    & > * {
      border-bottom-width: 0px;

      @media screen and (max-width: 1330px), screen and (max-height: 950px) {
        height: auto !important;
      }

      // @media screen and (max-width: 1000px) and (min-height: 950px),
      //   screen and (max-width: 800px) and (min-height: 901px),
      //   screen and (max-width: 780px) {
      //   padding: 32px 32px 35px 42px;
      // }

      // @media screen and (max-width: 550px) {
      //   padding: 32px 32px 35px 32px;
      // }
    }

    div:last-of-type {
      border-right-width: 0px;
    }
  }

  .highlight {
    & > div:first-child {
      border: 1px solid #dddddd;
      background-color: #ececec2f;
    }
  }

  .arrowPressed {
    opacity: 0;
    transition: 0s ease opacity;
  }

  .dots {
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;

    @media screen and (max-width: 1050px) {
      display: none;
    }

    .dot {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #cccccc;
      margin-left: 30px;
      margin-right: 30px;
      cursor: pointer;
    }

    .dotSelect {
      background-color: #777;
    }
  }
}
</style>