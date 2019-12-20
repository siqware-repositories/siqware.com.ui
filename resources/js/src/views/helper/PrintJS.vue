<template>
    <vx-card title="PrintJs" code-toggler class="mb-base">
        <div id="printMe">
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam blanditiis consequuntur debitis delectus dicta dolorum est facere harum, illum iusto laudantium libero, natus nisi odio quo, ratione repudiandae voluptatibus.</span><span>Architecto asperiores, atque aut consectetur culpa cupiditate dignissimos dolore doloribus ducimus eius eveniet fugiat illo illum incidunt iusto numquam possimus praesentium qui repellendus reprehenderit similique, sit veniam voluptas voluptatem, voluptatum!</span><span>Ab aliquam autem distinctio dolor doloribus ducimus ea eveniet, expedita illo maxime nihil nisi nobis quae quasi qui reiciendis rem sunt voluptatum! Alias assumenda distinctio labore, quis repellat tempore voluptates?</span><span>A accusantium aperiam beatae blanditiis consequatur culpa, delectus deleniti ducimus eaque error explicabo facere impedit inventore laudantium minus mollitia officia optio perferendis quo similique tenetur totam ut vel velit voluptatum.</span><span>Amet dicta dignissimos, dolor, dolorem dolorum est facilis harum impedit incidunt inventore ipsam iure labore laudantium magni minima mollitia quam quidem quod reprehenderit sequi sit, tempora tenetur veritatis! Facere, sequi.</span><span>A beatae commodi consequatur exercitationem molestiae rem sed soluta velit voluptate. Amet aperiam commodi consequatur, culpa deleniti doloremque doloribus maxime numquam repellendus sit temporibus voluptatum. Alias dolorem odit suscipit veritatis.</span><span>Alias delectus esse laudantium perspiciatis placeat reiciendis repudiandae rerum! Dolorum ea eaque, eius fuga hic, impedit ipsa laborum, laudantium libero magni maiores minima placeat possimus provident quae quasi qui quisquam.</span><span>A architecto dolore ducimus enim ex expedita, ipsum magni molestias necessitatibus nemo nesciunt nulla quam rerum ullam veniam! Enim excepturi expedita facere fuga illum iste libero nam odit officia voluptas?</span><span>A adipisci animi aperiam corporis dolorem earum eligendi enim id illo illum magni natus odio, officia officiis perspiciatis recusandae, repellat similique sit? Accusantium beatae consequuntur dolorem eligendi pariatur quidem similique!</span><span>Aut consectetur corporis dolore doloribus enim eos esse et fuga, fugit id, impedit laboriosam laudantium molestias nobis odit officia officiis perspiciatis quam quis rem rerum sint vel velit veniam voluptatem.</span><span>A autem eaque et quo tenetur. Consequuntur dignissimos eligendi fugiat impedit ipsa iure laborum libero magni non nulla numquam praesentium quas quia reiciendis repellendus sequi sit, temporibus tenetur, unde voluptates!</span><span>Ea eveniet ipsum libero necessitatibus quas quod quos suscipit vero, voluptate voluptatum. Assumenda fugiat iste reiciendis. A ipsa odit repellat. Architecto asperiores eligendi magni necessitatibus nihil odit repellendus suscipit, velit.</span><span>Beatae blanditiis est excepturi numquam obcaecati provident quam suscipit veritatis. Aliquam at distinctio exercitationem harum nobis nulla optio perferendis possimus quo, ratione sunt tempora tempore temporibus ullam ut velit veniam?</span><span>Accusamus animi architecto beatae consequuntur debitis deleniti dignissimos dolorum eaque eius laudantium maiores molestiae nam necessitatibus, nesciunt non perspiciatis tenetur unde vero. Ad animi aut, est hic minus officiis quaerat.</span><span>Amet asperiores assumenda aut delectus, dicta dolor dolore eaque enim fugiat fugit illum, ipsum iste libero minima molestiae nisi nostrum odio pariatur perspiciatis placeat, quia ratione soluta tempora ullam ut!</span><span>Autem deserunt doloribus, ducimus eaque enim facere fuga, laboriosam libero nulla numquam obcaecati odit optio sint ullam voluptas voluptatem voluptatibus. Aliquid dolorem eius, hic in ipsam nesciunt nihil optio perferendis!</span><span>Adipisci, architecto cum, deleniti dolore enim, harum incidunt molestiae natus nulla numquam possimus quia quidem quis sapiente sit? Blanditiis corporis delectus dolore eligendi ipsam iste natus nemo nihil, officia velit?</span><span>At commodi consequatur porro reprehenderit sequi? Ad laboriosam maxime provident sequi soluta velit voluptas. A accusantium ad cum eaque eos ex exercitationem facere facilis iusto possimus quos sunt unde, vel?</span><span>Et exercitationem expedita harum inventore molestiae. Accusamus ad alias, at commodi distinctio eos exercitationem incidunt laborum modi non odit possimus, praesentium provident quas qui quia repellendus sequi sint unde voluptates.</span><span>Aliquid consequatur eveniet ex expedita minus nihil vero vitae. Adipisci architecto asperiores fugiat laudantium modi nesciunt quaerat sequi voluptatibus. Aperiam eligendi itaque, laboriosam molestiae nam quasi quibusdam quis quod veritatis!</span>
            </p>
        </div>
        <vs-button @click="printHtml">Print</vs-button>
        <template slot="codeContainer">
            &lt;script&gt;
            import printJS from 'print-js'
                export default {
                    name: "PrintJs",
                    methods:{
                        //print
                        async _print() {
                        const el = document.querySelector('#printMe');
                        const options = {
                            type: 'dataURL'
                        };
                        return await this.$html2canvas(el, options);
                },
                async printHtml() {
                        let image = await this._print();
                        printJS(image, 'image')
                    },
                }
            }
                this.moment().format('MMMM Do YYYY, h:mm:ss a'); // December 19th 2019, 4:01:46 pm
                this.moment().format('dddd');                    // Thursday
                this.moment().format(&quot;MMM Do YY&quot;);               // Dec 19th 19
                this.moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019
                this.moment().format();                          // 2019-12-19T16:01:46+07:00
                // undefined
                this.moment().subtract(10, 'days').calendar(); // 12/09/2019
                this.moment().subtract(6, 'days').calendar();  // Last Friday at 4:00 PM
                this.moment().subtract(3, 'days').calendar();  // Last Monday at 4:00 PM
                this.moment().subtract(1, 'days').calendar();  // Yesterday at 4:00 PM
                this.moment().calendar();                      // Today at 4:00 PM
                this.moment().add(1, 'days').calendar();       // Tomorrow at 4:00 PM
                this.moment().add(3, 'days').calendar();       // Sunday at 4:00 PM
                this.moment().add(10, 'days').calendar();
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    import printJS from 'print-js'
    export default {
        name: "PrintJs",
        methods:{
            //print
            async _print() {
                const el = document.querySelector('#printMe');
                const options = {
                    type: 'dataURL'
                };
                return await this.$html2canvas(el, options);
            },
            async printHtml() {
                let image = await this._print();
                printJS(image, 'image')
            },
        }
    }
</script>

<style scoped>

</style>