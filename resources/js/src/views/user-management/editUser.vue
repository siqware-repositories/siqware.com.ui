<template>
    <sweet-modal ref="editUser" :title="`Update User: ${data.name}`" :blocking="true" :width="!mobilecheck()?'60%':''">
        <div class="vx-row">
            <div class="vx-col md:w-3/4">
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" label-placeholder="ឈ្មោះ" name="name"
                                  v-model="data.name" class="w-full"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('name')">{{ errors.first('name') }}</span>
                    </div>
                    <div class="vx-col w-full mt-2">
                        <vs-input v-validate="'required|email'" label-placeholder="អ៊ីម៉ែល" name="email"
                                  v-model="data.email" class="w-full"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                    <div class="vx-col w-full mt-2">
                        <v-select
                                v-validate="'required'"
                                name="role"
                                v-model="data.role"
                                placeholder="Please select"
                                :options="['admin','super_admin','user','super_user','developer']"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('role')">{{ errors.first('role') }}</span>
                    </div>
                </div>
            </div>
            <div class="vx-col md:w-1/4">
                <label>ប្រូហ្វាល</label>
                <vue-dropzone class="max-content p-1" duplicateCheck ref="profile"
                              @vdropzone-success="successUpload" id="profile"
                              :options="dropzoneOptions"></vue-dropzone>
            </div>
        </div>
        <vs-button @click="updateUser" slot="button">Update</vs-button>
    </sweet-modal>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "editUser",
        components:{
            vueDropzone: vue2Dropzone
        },
        data(){
            return{
                data: {
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                    role:'user',
                    profile: 'images/placeholder/placeholder.png'
                },
                //dropzone option
                dropzoneOptions: {
                    url: route('file.upload.thumb'),
                    maxFiles: 1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាពបើមាន",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                }
            }
        },
        methods:{
            show(data) {
                this.$refs.editUser.open();
                this.data.id = data.id;
                this.data.name = data.name;
                this.data.email = data.email;
                this.data.profile = data.profile;
                this.data.role = data.role;
                this.$refs.profile.removeAllFiles();
                this.$refs.profile.manuallyAddFile({ size: 123}, this.data.profile);
            },
            //store
            updateUser() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updateUser', self.data).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យបានបន្ថែម',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                                self.$emit('finished');
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនបានបន្ថែម',
                                    color: 'danger',
                                    iconPack: 'feather',
                                    icon: 'icon-message-square',
                                    position: 'top-center'
                                });
                            }
                            self.$vs.loading.close();
                        });
                    } else {
                        self.$vs.notify({
                            title: 'ប្រតិបត្តិការបរាជ័យ',
                            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                            color: 'danger',
                            iconPack: 'feather',
                            icon: 'icon-message-square',
                            position: 'top-center'
                        })
                    }
                });
            },
            //image upload
            successUpload(file, res) {
                this.data.profile = (res.path)
            }
        }
    }
</script>

<style scoped>

</style>