O **ScCard** é um componente de uso genérico, que possui 3 slots (.card-header, .card-content e .card-footer).

```jsx { "className": "checks"}
    <div class="columns">
        
        <!-- Card Simples  -->
    	<div class="column">
            <sc-card>
                <div slot="body" class="has-text-centered">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@intelipost</a>.
                    <a href="#">#styleguide</a> <a href="#">#dev-team</a>
                </div>
            </sc-card>
        </div>

        <!-- Card com actions -->
    	<div class="column">
            <sc-card
                title="This is an awesome test!"
                icon="fas fa-angle-down">

                <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <template slot="footer">
                    <a href="#" @click.prevent="" class="card-footer-item has-text-danger has-icon-left">
                        <i class="far fa-times-circle fa-2x"></i>
                    </a>
                    <a href="#" @click.prevent="" class="card-footer-item has-text-info">
                        <i class="far fa-edit fa-2x"></i>
                    </a>
                    <a href="#" @click.prevent="" class="card-footer-item has-text-primary">
                        <i class="far fa-save fa-2x"></i>
                    </a>
                </template>
            </sc-card>
        </div>

        <!-- Card com header e conteudo -->
    	<div class="column has-text-centered">
            <sc-card 
                title="This is an awesome test!"
                icon="fas fa-rocket">

                <template slot="body">
                    <br>
                    <p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </p>
                    <p>Donec ultricies, nisi non dictum facilisis, felis ex euismod est.</p>
                </template>
            </sc-card>
        </div>
    </div>
```