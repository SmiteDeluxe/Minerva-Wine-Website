<template>
  <footer class="noselect">
    <div class="logo">
      <img src="~static/images/torch.svg" alt="Homepage" class="torch" />
      <img
        src="~static/images/minervaText.svg"
        alt="Homepage"
        class="logoText"
      />
    </div>
    <div class="linksWrapper">
      <a href="https://docs.minerva.market/" target="_blank" class="docLink">
        <span>Documentation</span>
        <img src="~static/images/socials/doc.svg" alt="Documentation Link"
      /></a>
      <div class="socialsLinks">
        <a
          href="https://twitter.com/Minerva_wine"
          target="_blank"
          class="socialLink"
          ><img src="~static/images/socials/twitter.svg" alt="Twitter Link" />
        </a>
        <a
          href="http://discord.gg/GeaWsVg6A5"
          target="_blank"
          class="socialLink"
          ><img src="~static/images/socials/discord.svg" alt="Discord Link" />
        </a>
        <a
          href="http://medium.com/@Minerva_NFT"
          class="socialLink"
          target="_blank"
          ><img src="~static/images/socials/medium.svg" alt="Medium Link" />
        </a>
        <a
          href="https://www.linkedin.com/company/minerva-dao"
          target="_blank"
          class="socialLink"
          ><img src="~static/images/socials/linked.svg" alt="LinkedIn Link" />
        </a>
        <a
          href="https://www.instagram.com/minerva.wine/"
          target="_blank"
          class="socialLink"
          ><img src="~static/images/socials/insta.svg" alt="Instagram Link" />
        </a>
        <a href="http://t.me/MinervaNFT" target="_blank" class="socialLink"
          ><img src="~static/images/socials/telegram.svg" alt="Telegram Link" />
        </a>
      </div>
      <a
        href="https://docs.minerva.market/legal-documents/minerva-privacy-policy"
        target="_blank"
        class="privPol"
      >
        <span>Privacy Policy</span>
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
footer {
  height: $footer-height;
  width: 100%;
  background-color: $main-darker;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;

  .linksWrapper {
    position: absolute;
    bottom: 50px;
    right: 60px;
    display: flex;
    height: 95px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    filter: invert(100%) sepia(58%) saturate(427%) hue-rotate(223deg)
      brightness(121%) contrast(71%);
    padding-left: 30px;

    @media screen and (max-width: 450px) {
      right: 30px;
    }

    @media screen and (max-width: 329px) {
      height: 120px;
      bottom: 35px;
    }

    @media screen and (max-width: 275px) {
      bottom: 0;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
      width: 80%;
    }

    .docLink {
      cursor: pointer;
      width: 145px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      color: $dark-font;

      img {
        width: 30px;
      }

      & :hover + img {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
      }

      img:hover {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
      }
    }

    .socialsLinks {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      .socialLink {
        width: 30px;
        margin-left: 10px;
        cursor: pointer;

        & :hover {
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
          -ms-transform: scale(1.1);
          -o-transform: scale(1.1);
          transform: scale(1.1);
        }

        * {
          width: 30px;
        }
      }
    }

    .privPol {
      color: $dark-font;
      font-size: 14px !important;
    }
  }

  .logo {
    position: absolute;
    width: 210px;
    height: 105px;
    left: 40px;
    right: initial;
    top: 10px;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-grow: 0;
    flex: 0;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    .torch {
      width: 15px;

      @media screen and (max-width: 470px) {
        display: none;
      }
    }

    .logoText {
      width: 170px;

      @media screen and (max-width: 690px) {
        display: none;
      }
    }
  }
}
</style>