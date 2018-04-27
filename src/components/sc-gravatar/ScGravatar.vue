<script>
  import Gravatar from 'vue-gravatar';

  export default {
    name: 'sc-gravatar',
    extends: Gravatar,
    props: {
      /**
      * Hash MD5 do gravatar
      */
      hash: {
        type: String,
        default: '',
      },
      /**
      * Email do gravatar, utilizado quando nenhuma hash é fornecida
      */
      email: {
        type: String,
        default: '',
      },
      /**
      * Tamanho da imagem do avatar
      */
      size: {
        type: Number,
        default: 80,
      },
      /**
      * A imagem que será renderizada por padrão.
      * Além da url default da intelipost o **Gravatar** permite as seguintes opções:
      * mm, identicon, monsterid, wavatar, retro, robohash, blank
      */
      defaultImg: {
        type: String,
        default: 'https://secure.intelipost.com.br/images/zenCircle.jpg',
      },
      /**
      * A avaliação da imagem do gravatar
      */
      rating: {
        type: String,
        default: '',
      },
      /**
      * O alt da imagem
      */
      alt: {
        type: String,
        default: '',
      },
    },
  };
</script>
