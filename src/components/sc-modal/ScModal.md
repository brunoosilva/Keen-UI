O componente **ScModal** é o corpo do modal que sera renderizado, e é um extend do componente **b-modal** da library [Buefy](https://buefy.github.io/#/documentation/modal)

```vue
    <template>
        <div class="columns">
            <div class="column">
                <button class="button is-primary is-medium"
                    @click="openModal()">
                    Abrir Modal
                </button>
            </div>
        </div>
    </template>

    <script>
        export default {
            methods: {
                openModal() {
                    this.$modal.open({
                        component: {
                            template: `
                                <sc-modal title="Exemplo de modal simples">
                                    <template slot="body">
                                        <p>Você está certo disso?</p>
                                    </template>
                                    <template slot="footer">
                                        <button type="button" class="button is-danger is-pulled-left" @click="$parent.close()">Não</button> 
                                        <button type="button" class="button is-primary is-pulled-right">Sim</button> 
                                    </template>
                                </sc-modal>
                            `
                        },
                        hasModalCard: true,
                    })
                }
            }
        }

        
    </script>

```