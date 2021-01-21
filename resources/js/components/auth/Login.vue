<template>
    <v-app>
        <v-content class="parallax">
            <v-container fill-height>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="6" md="8" lg="8" xl="6">
                        <v-card elevation="12">
                            <v-row no-gutters>
                                <v-col cols="12" md="6" class="green hidden-sm-and-down"></v-col>
                                <v-col cols="12" md="6" class="login-form">
                                    <v-card-text>
                                        <v-img src="assets/images/landing/bg-top.png" class="top-img"></v-img>
                                    <v-btn text color="#4B9E56" x-large class="mb-10 mt-5">
                                        <div class="text-h5">Login as</div>
                                    </v-btn>
                                    <v-row align="center" justify="center" class="mb-10">
                                        <v-btn-toggle
                                            v-model="text"
                                            color="green"
                                            mandatory
                                        >
                                            <v-btn value="student">Registrant</v-btn>
                                            <v-btn value="teacher">Instructor</v-btn>
                                            <v-btn value="admin">Admin</v-btn>
                                        </v-btn-toggle>
                                    </v-row>

                                    <v-text-field
                                    placeholder="Email"
                                    type="email"
                                    class="mx-5"
                                    v-model="form.email"
                                    ></v-text-field>
                                    <v-text-field
                                    placeholder="Password"
                                    type="password"
                                    class="mx-5"
                                    v-model="form.password"
                                    ></v-text-field>
                                    <v-btn absolute right small text plain class="blue--text btn-normal">Forgot your password?</v-btn>

                                    <v-card-actions class="justify-content-center mt-10 pb-10">
                                        <v-btn @click="loginBtn" color="green" class="white--text" :block="$vuetify.breakpoint.smAndDown" width="150">Login</v-btn>
                                    </v-card-actions>
                                    <img src="assets/images/landing/bg-bottom.png" class="bottom-img img-fluid">
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Auth from '../../apis/modules/Auth'
    export default {
        data: () => ({
            form: {
                email: '',
                password: ''
            },
            text: ''
        }),
        methods: {
            loginBtn() {
                console.log(this.form)
                Auth.login(this.form).then(res => {
                    location.href = '/'+this.text+''
                })
            }
        }
    }
</script>

