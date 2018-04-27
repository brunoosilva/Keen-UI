O componente **ScSwitch** é um extend da biblioteca [vue-switches](https://github.com/drewjbartlett/vue-switches) e funciona como um switch comum, com animação e diversas possibilidades de estilo e customização.

```jsx
    let switchState = false;


    <div>
        <section class="columns">
            <div class="column">
                <h3>Labels & typeBold:</h3>
                <div class="column">
                    <sc-switch 
                        v-model="switchState"
                        label="typeBold Switch"
                        :typeBold="true"
                        @click="switchState = !switchState"
                    >
                    </sc-switch>
                </div>
                <div class="column">
                    <sc-switch 
                        v-model="switchState"
                        textEnabled="Label habilitado"
                        textDisabled="Label desabilitado"
                        @click="switchState = !switchState"
                    >
                    </sc-switch>
                </div>
            </div>
            <div class="column">
                <h3>Bulma Theme:</h3>
                <ul>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="default"
                            theme="bulma"
                            color="default" 
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="primary"
                            theme="bulma"
                            color="primary" 
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="green"
                            theme="bulma"
                            color="green" 
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="blue"
                            theme="bulma"
                            color="blue" 
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="red"
                            theme="bulma"
                            color="red" 
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="yellow"
                            theme="bulma"
                            color="yellow" 
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                </ul>
            </div>
            <div class="column">
                <h3>Bulma Bold:</h3>
                <ul>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="default"
                            theme="bulma"
                            color="default" 
                            :typeBold="true"
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="primary"
                            theme="bulma"
                            color="primary" 
                            :typeBold="true"
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="green"
                            theme="bulma"
                            color="green" 
                            :typeBold="true"
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="blue"
                            theme="bulma"
                            color="blue" 
                            :typeBold="true"
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="red"
                            theme="bulma"
                            color="red" 
                            :typeBold="true"
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                    <li>
                        <sc-switch 
                            v-model="switchState" 
                            label="yellow"
                            theme="bulma"
                            color="yellow" 
                            :typeBold="true"
                            @click="switchState = !switchState"
                        >
                        </sc-switch>
                    </li>
                </ul>
            </div>
        </section>
    </div>

    
```