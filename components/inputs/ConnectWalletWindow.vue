<template>
  <div class="wrapperWindow">
    <div v-click-outside="makeWalletWindowInvisible" class="walletWindow">
      <button class="close" @click="makeWalletWindowInvisible">
        <svg viewBox="0 0 24 24">
          <path
            fill="#999"
            d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
          ></path>
        </svg>
      </button>
      <span class="windowTitle">Connect a wallet</span>
      <button
        v-for="connection in availableConnections"
        :key="connection.identifier"
        class="connectButton"
        @click="
          walletController.connect(connection.type, connection.identifier)
        "
      >
        <span class="connectionName">{{ connection.name }} </span>

        <img
          :src="connection.icon"
          :alt="connection.name"
          style="width: 1.5em; height: 1.5em"
        />
      </button>
      <button
        v-for="connectType in availableInstallTypes"
        :key="connectType"
        class="connectButton"
        @click="walletController.install(connectType)"
      >
        <span class="connectionName"
          >Install
          {{
            connectType === 'EXTENSION' ? 'Terra Station Wallet' : connectType
          }}</span
        >
        <svg
          v-if="connectType === 'EXTENSION'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
          <path
            fill="#0E3CA5"
            d="M10.425 18.244c.619 2.287 2.831 4.012 3.937 3.956.038 0 4.238-.787 6.525-4.631 1.782-2.981 1.182-5.869-1.256-5.944-.844.075-10.387 2.269-9.206 6.619m9-14.644a10.58 10.58 0 00-6.92-2.55c-1.537 0-3 .338-4.331.919a3.73 3.73 0 00-.675.337c-.15.075-.3.169-.45.244l.037.019c-.43.3-.825.656-1.125 1.069-3.056 4.03 7.2 6.974 12.694 6.993 2.531 1.8 3.244-5.118.769-7.031z"
          ></path>
          <path
            fill="#5493F7"
            d="M8.794 3.675C7.387 5.794 2.68 7.294 1.912 7.05c.038-.056.057-.131.094-.188.263-.525.581-1.012.919-1.481.338-.469.713-.9 1.125-1.313.413-.412.844-.787 1.313-1.125.28-.206.58-.412.9-.6a3.29 3.29 0 011.556-.412c2.081.056.994 1.725.975 1.744M7.631 18.656c.094.675 0 3.3-.131 3.525-.112 0-.356.019-1.069-.375-.375-.206-.731-.45-1.069-.694-.468-.337-.9-.712-1.312-1.125a10.766 10.766 0 01-1.125-1.312 13.306 13.306 0 01-.919-1.482 8.65 8.65 0 01-.675-1.612c-.168-.563-.337-1.144-.431-1.725a11.92 11.92 0 01-.15-1.838 11.102 11.102 0 01.581-3.542l.113-.338c.806 1.088 1.744 2.063 2.55 3.15.768 1.031 1.8 2.738 2.025 3.094 1.312 2.231 1.518 3.619 1.612 4.275m15.619-6.638c0 1.462-.281 2.85-.788 4.125-1.33 1.425-10.256-2.082-10.35-2.12-1.218-.524-4.93-2.155-5.268-4.705-.488-3.694 6.994-6.263 10.275-6.357.393 0 1.593.019 2.287.582 2.363 2.08 3.844 5.1 3.844 8.474m-6.038 9.976c-.974.45-2.043.13-1.762-.825.525-1.82 5.213-3.694 6.244-3.788.131-.019.187.075.131.169-1.106 1.893-2.7 3.45-4.613 4.444"
          ></path>
        </svg>
      </button>
      <span class="beta">
        <infoWarningTooltip
          class="betaWarn"
          text="Not all Smart Contracts are fully audited yet!"
        />
        BETA VERSION<img src="~static/images/torch.svg" class="torch" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WalletController,
  Connection,
  ConnectType,
  // WalletStates,
  // WalletStatus,
} from '@terra-money/wallet-controller';
import { Subscription, combineLatest } from 'rxjs';
import {
  initController,
  getController,
} from '~/assets/ts/Chain/terraWalletController';
import toggleWalletWindowVisibility from '~/assets/ts/Chain/walletMethods';

export default Vue.extend({
  data: () => ({
    walletController: {} as WalletController,
    availableInstallTypes: [] as ConnectType[],
    // availableConnectTypes: [] as ConnectType[],
    availableConnections: [] as Connection[],
    // states: {} as WalletStates,
    // supportFeatures: [] as String[],
    subscription: null as Subscription | null,
  }),
  created() {
    if (getController() === undefined) {
      initController().then(() => {
        this.walletController = getController() as WalletController;
        this.subscribeWallet();
      });
    } else {
      this.walletController = getController() as WalletController;
      this.subscribeWallet();
    }
  },
  beforeDestroy() {
    this.subscription?.unsubscribe();
  },
  mounted() {
    document.documentElement.style.setProperty('--wwv', `none`);
  },
  methods: {
    subscribeWallet() {
      this.subscription = combineLatest([
        this.walletController.availableInstallTypes(),
        this.walletController.availableConnections(),
        this.walletController.states(),
      ]).subscribe(
        ([_availableInstallTypes, _availableConnections, _states]) => {
          this.availableInstallTypes = _availableInstallTypes;
          const connections = _availableConnections;
          const i = connections.findIndex((e) => e.type === 'READONLY');
          if (i > -1) connections.splice(i, 1);
          this.availableConnections = connections;
          // this.states = _states;
          // this.supportFeatures =
          //   _states.status === WalletStatus.WALLET_CONNECTED
          //     ? Array.from(_states.supportFeatures)
          //     : [];
          if (_states.status === 'WALLET_CONNECTED') {
            this.makeWalletWindowInvisible();
          }
        }
      );
    },
    makeWalletWindowInvisible() {
      toggleWalletWindowVisibility(false);
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapperWindow {
  display: var(--wwv);
  z-index: 210;
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: blur(7px);
  background-color: rgba(97, 97, 97, 0.089);
  width: 100vw;
  height: 100vh;
  justify-content: center;

  .walletWindow {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: $main-darker;
    border-radius: 1px;
    gap: 16px;
    height: max-content;
    margin-top: 60px;
    box-sizing: border-box;
    max-width: 450px;
    width: 95%;
    position: relative;
    -webkit-box-shadow: 0px 10px 50px -12px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 10px 50px -12px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 550px) {
      margin-top: 2.5vw;
    }

    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: transparent;
      border: none;
      cursor: pointer;

      svg {
        width: 14px;
        height: 14px;
      }
    }

    .windowTitle {
      color: white;
      font-size: max(1.8em, 20px);
      letter-spacing: 00.03em;
      margin-bottom: 24px;
      font-family: $standard-big-font;
    }

    .connectButton {
      cursor: pointer;
      border-radius: 7px;
      width: 100%;
      background-color: transparent;
      color: white;
      border: none;
      height: 72px;
      display: flex;
      justify-content: space-between;
      padding: 24px;
      align-items: center;
      box-sizing: border-box;
      font-size: max(1.1em, 14px);
      transition-duration: 0.2s;
      transition-timing-function: ease;
      transition-property: background-color color;

      &:hover {
        background-color: white;
        color: #333;
      }
    }
  }

  .beta {
    font-size: 0.8em;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    position: relative;
    cursor: default;

    .torch {
      height: 1em;
      padding-bottom: 2px;
      padding-left: 8px;
    }

    .betaWarn {
      display: none;
      position: absolute;
      top: calc(100% + 17px);
      width: 350%;
      left: -55%;
    }

    &:hover {
      .betaWarn {
        display: block;
      }
    }
  }
}
</style>

<style lang="scss">
.beta {
  .betaWarn {
    .text::after {
      left: calc(50% - 14px) !important;
    }
  }
}
</style>