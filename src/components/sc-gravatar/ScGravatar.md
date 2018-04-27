O **ScGravatar** é um extend da library **[vue-gravatar](https://github.com/JiriChara/vue-gravatar)**, utilizada para trazer uma imagem de perfil padrão para os usuários que não adicionarem uma personalizada.

```jsx { "className": "checks" }
    <div class="columns">

        <!-- Email only -->
        <div class="column">
            <sc-gravatar email="teste@intelipost.com.br"></sc-gravatar>
        </div>
        
        <!-- Gravatar default image -->
        <div class="column">
            <sc-gravatar defaultImg=""></sc-gravatar>
        </div>
        
        <!-- Gravatar Mistery Man image -->
        <div class="column">
            <sc-gravatar default-img="mm"></sc-gravatar>
        </div>

        <!-- Gravatar identicon -->
        <div class="column">
            <sc-gravatar default-img="identicon"></sc-gravatar>
        </div>

        <!-- Gravatar monsterid -->
        <div class="column">
            <sc-gravatar default-img="monsterid"></sc-gravatar>
        </div>

        <!-- Gravatar wavatar -->
        <div class="column">
            <sc-gravatar default-img="wavatar"></sc-gravatar>
        </div>

        <!-- Gravatar retro -->
        <div class="column">
            <sc-gravatar default-img="retro"></sc-gravatar>
        </div>

        <!-- Gravatar robohash -->
        <div class="column">
            <sc-gravatar default-img="robohash"></sc-gravatar>
        </div>

        <!-- Gravatar blank -->
        <div class="column">
            <sc-gravatar default-img="blank"></sc-gravatar>
        </div>
    </div>
```