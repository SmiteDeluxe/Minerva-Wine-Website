<template>
  <div class="wrapperClubArticle">
    <aside class="extraInfo">
      <div class="wrapperFixed sticky">
        <div class="secWrapper">
          <span class="sectionTitle">Author</span>
          <address class="author">
            <div class="row">
              <portableImage
                class="authorImage"
                :asset="currentArticle.author.image.asset"
                new-height="100"
                :alt="currentArticle.author.name + ' Profile picture'"
              />
              {{ currentArticle.author.name }}
            </div>
            <SanityContent
              :blocks="currentArticle.author.bio"
              :serializers="serializers"
            />
          </address>
        </div>
      </div>
    </aside>
    <div class="wrapperSanity">
      <article class="contentwrapperSanity">
        <h1 class="articleh1">{{ currentArticle.title }}</h1>
        <div class="detailsTop">
          <span class="aad"
            ><i class="by">by</i>
            <span class="author">{{ currentArticle.author.name }},</span
            ><i class="date"> {{ formatDate }}</i></span
          >
          <div class="cats">
            <infoCategoryBar
              v-for="cat in currentArticle.categories"
              :key="cat._id"
              :cat="{ name: cat.title, desciption: cat.desciption }"
            />
          </div>
        </div>

        <p class="abstract">{{ currentArticle.abstract }}</p>
        <portableImage
          :asset="currentArticle.mainImage.asset"
          :alt="currentArticle.seo.focus_keyword + ' main article image'"
        />
        <SanityContent
          class="bodySanity"
          :blocks="currentArticle.body"
          :serializers="serializers"
        />

        <address class="detailsBottom">
          <span class="sectionTitle">Author</span>
          <div class="sectionWrapper">
            <portableImage
              class="authorImage"
              :asset="currentArticle.author.image.asset"
              new-height="100"
              :alt="currentArticle.author.name + ' Profile picture'"
            />
            <div class="detailWrapper">
              <span class="name">
                {{ currentArticle.author.name }}
              </span>
              <SanityContent
                :blocks="currentArticle.author.bio"
                :serializers="serializers"
              />
            </div>
          </div>
        </address>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import imageUrlBuilder from '@sanity/image-url';
import * as defTypes from '~/assets/ts/Types/defaultTypes';
import { getArticleBySlug } from '~/assets/ts/CMSApi/articleApiFunctions';
import portableImage from '~/components/portableTextComps/portableImage.vue';
import portableLink from '~/components/portableTextComps/portableLink.vue';
import portableYT from '~/components/portableTextComps/portableYT.vue';
import meta from '~/assets/ts/helpers';

export default Vue.extend({
  name: 'FocusedArticle',
  components: { portableImage },
  layout: 'fixedHeader',
  async asyncData({ app: { $sanity }, route }) {
    const currentArticle: defTypes.Article = await getArticleBySlug(
      route.params.articleFocused,
      $sanity
    );
    return { currentArticle };
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
    currentArticle: {} as defTypes.Article,
    metadata: [] as defTypes.metadata[],
  }),
  head() {
    return {
      title: this.currentArticle.seo.seo_title,
      meta: this.metadata as [],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href:
            'https://minerva.market/club/' + this.currentArticle.slug.current,
        },
      ],
    };
  },
  computed: {
    formatDate() {
      const raw: String = this.currentArticle.publishedAt
        .toString()
        .substring(0, this.currentArticle.publishedAt.toString().indexOf('T'))
        .replaceAll('-', '');

      const temp: String =
        raw.substring(6, 8) +
        '/' +
        raw.substring(4, 6) +
        '/' +
        raw.substring(0, 4);
      return temp;
    },
  },
  mounted() {
    this.$accessor.SET_currentArticleKeyword(
      this.currentArticle.seo.focus_keyword
    );

    this.metadata = meta(
      this.currentArticle.seo.seo_title,
      this.currentArticle.seo.meta_description,
      'Minerva',
      this.currentArticle.seo.focus_keyword,
      imageUrlBuilder(this.$sanity.config as any)
        .image(this.currentArticle.mainImage.asset._ref)
        .url() + '?w=500&h=250&fit=crop&crop=center'
    );
    this.metadata.push({
      hid: 'twitter:card',
      name: 'twitter:card',
      property: 'twitter:card',
      content: 'summary_large_image',
    });
  },
});
</script>

<style lang="scss">
.wrapperClubArticle {
  display: grid;
  grid-template-columns: [aside] min(400px, 20vw) [content] auto;

  @media screen and (max-width: $first-incr), screen and (max-height: 700px) {
    grid-template-columns: [content] 100%;
  }

  @media screen and (max-width: 370px), screen and (max-height: 630px) {
    padding-top: 0px;
  }

  .extraInfo {
    border-right: rgba(0, 0, 0, 0.2) solid 1px;
    position: relative;
    height: 100%;
    background-color: #fcfcfc;

    @media screen and (max-width: $first-incr), screen and (max-height: 700px) {
      display: none;
    }

    .wrapperFixed {
      position: sticky;
      position: -webkit-sticky;
      width: min(400px, 20vw);
      padding-top: $header-height;
      box-sizing: border-box;
      height: 100vh;
      top: 0;

      @media screen and (max-height: 760px) {
        position: sticky;
        position: -webkit-sticky;
        top: 0;
      }

      .sectionTitle {
        padding-top: 4vh;
        width: 100%;
        text-align: left;
        border-bottom: rgba(0, 0, 0, 0.2) 1px solid;
        padding-bottom: 5px;
        box-sizing: border-box;
        padding-left: 5%;
        margin-bottom: 20px;
        color: #777;
      }

      .secWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;

        // a {
        //   margin-bottom: 70px;
        //   margin-right: calc(70% - 130px);
        //   margin-top: 40px;

        //   .button {
        //     min-width: 0px;
        //     width: 140px;
        //     height: 59px;

        //     .larger {
        //       font-size: 1.3em;
        //       color: $bright-font;
        //     }
        //   }
        // }

        .author {
          font-style: normal;
          color: #333;
          width: 70%;
          font-size: 2em;
          font-family: $secondary-big-font;
          margin-top: 10px;

          .row {
            display: flex;
            align-items: center;
            padding-bottom: 5px;

            .authorImage {
              margin-right: 10px;

              img {
                width: 80px;
                border-radius: 50%;
              }
            }
          }

          p {
            margin-top: 10px;
            color: #777;
            letter-spacing: 0.01em;
            font-size: 1.3rem;
            line-height: 1.4rem;
          }
        }
      }
    }
  }

  .wrapperSanity {
    padding-top: 100px;
    padding-bottom: 200px;
    grid-column: content;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: $fifth-incr) {
      padding-bottom: 50px;
    }

    .detailsBottom {
      font-style: normal;
      color: #333;
      width: 100%;
      margin-top: 50px;
      display: none;

      @media screen and (max-width: $first-incr),
        screen and (max-height: 700px) {
        display: block;
      }

      .sectionTitle {
        padding-top: 4vh;
        margin-left: 10px;
        padding-left: 20px;
        width: 90%;
        text-align: left;
        border-bottom: #d8d8d8 1px solid;
        padding-bottom: 5px;
        color: #777;
        display: inline-block;
        font-size: max(1em, 12px);

        @media screen and (max-width: $fourth-incr) {
          margin-left: 0;
        }
      }

      .sectionWrapper {
        margin-top: -20px;
        width: 90%;
        font-size: 2em;
        display: flex;
        align-items: center;

        .name {
          font-family: $secondary-big-font;
        }

        .authorImage {
          margin-bottom: 10px;

          img {
            max-width: 100px;
            width: 14vw;
            min-width: 60px;
            border-radius: 50%;
          }
        }

        .detailWrapper {
          margin-left: 40px;

          @media screen and (max-width: $fourth-incr) {
            margin-left: 20px;
          }

          p {
            margin-top: 10px;
            color: rgb(95, 95, 95);
            letter-spacing: 0.01em;
            font-size: 1.3rem;
            line-height: 1.4rem;
          }
        }
      }
    }

    .contentwrapperSanity {
      max-width: 55em;
      padding-top: 110px;

      @media screen and (max-width: 1050px) and (min-height: 950px),
        screen and (max-width: 930px) {
        max-width: 87%;
      }

      @media screen and (max-height: 855px),
        screen and (max-width: $third-incr) {
        padding-top: 60px;
      }

      @media screen and (max-width: $fourth-incr) {
        padding-top: 50px;
      }

      @media screen and (max-width: $fifth-incr) {
        padding-top: 30px;
      }

      .articleh1 {
        color: $dark-font;
        font-weight: normal;
        margin-bottom: 9px;
        margin-top: 15px;
        line-height: 1;
        font-size: 3.9em;

        @media screen and (max-width: $sixth-incr) {
          margin-bottom: 14px;
        }

        @media screen and (max-width: 490px) {
          font-size: 3.5em;
        }
      }

      .detailsTop {
        display: flex;
        align-items: center;
        padding-top: 5px;

        .aad {
          font-size: 1.2em;

          .by {
            color: #777;
          }

          .author {
            font-size: 1.1em;
            color: #333;
          }

          .date {
            margin-left: 0.3em;
            color: #333;
          }
        }

        .cats {
          margin-left: 30px;
          display: flex;
          gap: 8px;
        }
      }

      .abstract {
        margin-top: 30px;
      }

      img {
        margin: 50px auto 50px auto;
      }

      .bodySanity {
        color: $dark-font-lighter;

        p {
          margin: 5px 0px 5px 0px;
          color: #333;
          min-height: 1em;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased !important;
          -moz-font-smoothing: antialiased !important;
          text-rendering: optimizelegibility !important;
          letter-spacing: 0.05em;
          font-size: max(1.3em, 16px);
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

        h1,
        h2,
        h3,
        h4 {
          margin-bottom: 25px;
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
    }
  }
}
</style>