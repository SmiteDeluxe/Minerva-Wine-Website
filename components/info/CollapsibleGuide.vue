<template>
  <div class="wrapperOuter">
    <svg
      v-if="first"
      class="line"
      width="100%"
      height="2"
      :viewBox="'0 0 1000 2'"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <line
        x1="8.74228e-08"
        y1="1"
        x2="100%"
        y2="1.00012"
        stroke="white"
        stroke-opacity="0.5"
        stroke-width="2"
      />
    </svg>

    <div class="wrapper" @click="expanded = !expanded">
      <div class="iteration">
        <h4 class="customh4 noselect">
          {{ iteration }}
        </h4>
      </div>
      <div class="main">
        <h3 class="customh3 noselect">
          {{ header }}
        </h3>
        <p ref="para" class="mainText" :class="{ expandedp: expanded }">
          {{ mainText }}
          <br /><br />
          {{ secondaryText }}
        </p>
      </div>
      <div class="expandBtnWrapper">
        <svg
          class="expandLines"
          :class="{ collapsedClassHor: !expanded }"
          width="40"
          height="3"
          viewBox="0 0 40 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="1.14258"
            x2="40"
            y2="1.14258"
            stroke="white"
            stroke-width="2"
          />
        </svg>

        <svg
          class="expandLines"
          :class="{ collapsedClassVert: !expanded }"
          width="40"
          height="3"
          viewBox="0 0 40 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="1.14258"
            x2="40"
            y2="1.14258"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
    <svg
      width="100%"
      height="2"
      viewBox="0 0 1000 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <line
        x1="8.74228e-08"
        y1="1"
        x2="100%"
        y2="1.00012"
        stroke="white"
        stroke-opacity="0.5"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'InfoCollapsibleGuide',
  props: {
    iteration: {
      default: '',
      type: String,
    },
    header: {
      default: '',
      type: String,
    },
    mainText: {
      default: '',
      type: String,
    },
    secondaryText: {
      default: '',
      type: String,
    },
    first: {
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    expanded: false,
  }),
});
</script>

<style lang="scss" scoped>
* {
  text-align: left;
  z-index: 1;
}
.wrapperOuter {
  .line {
    width: 100%;
  }

  .wrapper {
    display: flex;
    position: relative;
    background-color: transparent !important;
    padding: 50px 0px 50px 0px;
    cursor: pointer;

    @media screen and (max-width: $fourth-incr) {
      padding: 40px 0px 40px 0px;
    }

    .iteration {
      flex-shrink: 0;
      width: 210px;

      @media screen and (max-width: $second-incr) {
        width: 170px;
      }

      @media screen and (max-width: $third-incr) {
        width: 140px;
      }

      @media screen and (max-width: $fourth-incr) {
        display: none;
      }

      h4 {
        line-height: 80% !important;

        @media screen and (max-width: $second-incr) {
          font-size: 3em !important;
          line-height: 110% !important;
        }
      }
    }

    .main {
      color: $bright-font;

      * {
        z-index: 1;
      }

      p {
        padding: 30px 15% 40px 0px;
        opacity: 0;
        overflow: hidden;
        display: none;
        text-align: justify;

        @media screen and (max-width: 1500px) {
          text-align: initial;
        }
      }

      h3 {
        padding-right: 90px;
        margin-top: 4px;

        @media screen and (max-width: $third-incr) {
          font-size: 2.7em !important;
        }
      }

      .expandedp {
        position: relative;
        opacity: 1;
        transition: opacity ease 0.5s;
        display: block;
      }
    }

    .expandBtnWrapper {
      position: absolute;
      top: 65px;
      right: 20px;
      height: 40px;
      width: 40px;

      @media screen and (max-width: $third-incr) {
        top: 53px;
      }

      @media screen and (max-width: $fourth-incr) {
        top: 39px;
      }

      .expandLines {
        position: absolute;
        top: 20px;
        transition: transform ease 0.3s;
      }
    }

    .collapsedClassVert {
      transform: rotate(-90deg);
    }
  }
}
</style>