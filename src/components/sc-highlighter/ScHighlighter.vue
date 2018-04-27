<script>
  import Prism from 'vue-prismjs';

  export default {
    name: 'sc-highlighter',
    extends: Prism,
    props: {
      /**
       * Lista de plugins
       */
      plugins: {
        type: Array,
        default () {
          return ['custom-class'];
        },
      },
      /**
       * Middleware que é executado antes de renderizar
       */
      use: {
        type: Function,
        default () {
          window.Prism.plugins.customClass.prefix('sc-highlighter--');
          return true;
        },
      },
    },
  };
</script>

<style lang="scss">
  code[class*="language-"],
  pre[class*="language-"] {
    color: white;
    background: none;
    text-shadow: 0 -.1em .2em black;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: inherit;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  pre[class*="language-"],
  :not(pre) > code[class*="language-"] {
    background: hsl(30, 20%, 25%);
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em auto;
    width: calc(100% - 150px);
    height: calc(100% - 20px);
    overflow: auto;
    border: .1em solid hsl(30, 20%, 40%);
    border-radius: .5em;
    box-shadow: 1px 1px .5em black inset;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .15em .2em .05em;
    border-radius: .3em;
    border: .13em solid hsl(30, 20%, 40%);
    box-shadow: 1px 1px .3em -.1em black inset;
    white-space: normal;
  }

  .sc-highlighter--token.sc-highlighter--comment,
  .sc-highlighter--token.sc-highlighter--prolog,
  .sc-highlighter--token.sc-highlighter--doctype,
  .sc-highlighter--token.sc-highlighter--cdata {
    color: hsl(30, 20%, 50%);
  }

  .sc-highlighter--token.sc-highlighter--punctuation {
    opacity: .7;
  }

  .namespace {
    opacity: .7;
  }

  .sc-highlighter--token.sc-highlighter--property,
  .sc-highlighter--token.sc-highlighter--tag,
  .sc-highlighter--token.sc-highlighter--boolean,
  .sc-highlighter--token.sc-highlighter--number,
  .sc-highlighter--token.sc-highlighter--constant,
  .sc-highlighter--token.sc-highlighter--symbol {
    color: hsl(350, 40%, 70%);
  }

  .sc-highlighter--token.sc-highlighter--selector,
  .sc-highlighter--token.sc-highlighter--attr-name,
  .sc-highlighter--token.sc-highlighter--string,
  .sc-highlighter--token.sc-highlighter--char,
  .sc-highlighter--token.sc-highlighter--builtin,
  .sc-highlighter--token.sc-highlighter--inserted {
    color: hsl(75, 70%, 60%);
  }

  .sc-highlighter--token.sc-highlighter--operator,
  .sc-highlighter--token.sc-highlighter--entity,
  .sc-highlighter--token.sc-highlighter--url,
  .language-css .sc-highlighter--token.sc-highlighter--string,
  .style .sc-highlighter--token.sc-highlighter--string,
  .sc-highlighter--token.sc-highlighter--variable {
    color: hsl(40, 90%, 60%);
  }

  .sc-highlighter--token.sc-highlighter--atrule,
  .sc-highlighter--token.sc-highlighter--attr-value,
  .sc-highlighter--token.sc-highlighter--keyword {
    color: hsl(350, 40%, 70%);
  }

  .sc-highlighter--token.sc-highlighter--regex,
  .sc-highlighter--token.sc-highlighter--important {
    color: #e90;
  }

  .sc-highlighter--token.sc-highlighter--important,
  .sc-highlighter--token.sc-highlighter--bold {
    font-weight: bold;
  }
  .sc-highlighter--token.sc-highlighter--italic {
    font-style: italic;
  }

  .sc-highlighter--token.sc-highlighter--entity {
    cursor: help;
  }

  .sc-highlighter--token.sc-highlighter--deleted {
    color: red;
  }
</style>
