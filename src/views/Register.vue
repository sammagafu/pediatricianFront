<template>
    <LoadingScreen :loading="authdata.isLoading"/>
    
    <section class="py-100-70 login">
        <div class="text-center mb-4">
            <h2>Welcome Please Register</h2>
        </div>
        {{err}}
        <div class="container add-comments">
            <form class="inner-add-comments form-contact-1" id="registration-form" @submit.prevent="registerUser">
                <div class="row">
                    <div class="col-md-6 offset-md-3">

                        <div class="mb-3">
                            <div class="form-group">
                                <label for="firstname">First Name <span style="color: red">*</span></label>
                                <input type="text" v-model="firstname" class="form-control" id="firstname" required>
                                <span class="text-danger" v-if="msg.firstname">{{msg.firstname}}</span>
                                <span class="text-danger" v-if="err[first_name]">{{err[first_name]}}</span>

                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="middlename">Middle name <span style="color: red">*</span></label>
                                <input type="text" v-model="middlename" class="form-control" id="middlename" required>
                                <span class="text-danger" v-if="msg.middlename">{{msg.middlename}}</span>
                                <span class="text-danger" v-if="err.middlename">{{err[middlename]}}</span>

                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="lastname">Last Name <span style="color: red">*</span></label>
                                <input type="text" v-model="lastname" class="form-control" id="lastname" required>
                                <span class="text-danger" v-if="msg.lastname">{{msg.lastname}}</span>

                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="email">Email <span style="color: red">*</span></label>
                                <input type="email" v-model="email" class="form-control" id="email" required>
                                <span class="text-danger" v-if="msg.email">{{msg.email}}</span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="phonenumber">Phone Number (Start with +255)</label>
                                <input type="phone" v-model="phonenumber" class="form-control" id="phonenumber" required>
                                <span class="text-danger" v-if="msg.phonenumber">{{msg.phonenumber}}</span>

                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="password" class="form-control" id="password" required>
                                <span v-if="msg.password">{{msg.password}}</span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="confirmpass">Confrim Password</label>
                                <input type="password" v-model="repassword" class="form-control" id="confirmpass" required>
                                <span v-if="msg.repassword">{{msg.repassword}}</span>

                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="gender">Gender <span style="color: red">*</span></label>
                            <select name="gender" class="form-control" v-model="gender" id="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="region">Region <span style="color: red">*</span></label>
                            <select class="form-control" v-model="region" id="region">
                                <option value="Arusha">Arusha</option>
                                <option value="Dar es Salaam">Dar es Salaam</option>
                                <option value="Dodoma">Dodoma</option>
                                <option value="Geita">Geita</option>
                                <option value="Iringa">Iringa</option>
                                <option value="Kagera">Kagera</option>
                                <option value="Katavi">Katavi</option>
                                <option value="Kigoma">Kigoma</option>
                                <option value="Kilimanjaro">Kilimanjaro</option>
                                <option value="Lindi">Lindi</option>
                                <option value="Manyara">Manyara</option>
                                <option value="Mara">Mara</option>
                                <option value="Mbeya">Mbeya</option>
                                <option value="Mjini Magharibi">Mjini Magharibi</option>
                                <option value="Morogoro">Morogoro</option>
                                <option value="Mtwara">Mtwara</option>
                                <option value="Mwanza">Mwanza</option>
                                <option value="Njombe">Njombe</option>
                                <option value="Pemba North">Pemba North</option>
                                <option value="Pemba South">Pemba South</option>
                                <option value="Pwani">Pwani</option>
                                <option value="Rukwa">Rukwa</option>
                                <option value="Ruvuma">Ruvuma</option>
                                <option value="Shinyanga">Shinyanga</option>
                                <option value="Simiyu">Simiyu</option>
                                <option value="Singida">Singida</option>
                                <option value="Songwe">Songwe</option>
                                <option value="Tabora">Tabora</option>
                                <option value="Tanga">Tanga</option>
                                <option value="Unguja North">Unguja North</option>
                                <option value="Unguja South">Unguja South</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label>Please select the profession that most closely represents you <span
                                    style="color: red">*</span></label>
                            <select class="form-control" name="profession" v-model="profession">
                                <option value="Administrator">Administrator</option>
                                <option value="Community health worker">ommunity health worker</option>
                                <option value="First responder such as EMT or Paramedic">First responder such as EMT or
                                    Paramedic</option>
                                <option value="Mental health provider such as counselor, psychologist, social worker">
                                    Mental
                                    health provider such as counselor, psychologist, social worker</option>
                                <option value="Nurse or practitioner or physician assistant">Nurse or practitioner or
                                    physician
                                    assistant</option>
                                <option value="Pharmacist">Pharmacist</option>
                                <option value="Paediatrician">Paediatrician</option>
                                <option value="Public health official">Public health official</option>
                                <option value="Testing or laboratory personnel">Testing or laboratory personnel</option>
                                <option value="Teacher/educator">Teacher/educator</option>
                                <option value="Researcher">Researcher</option>
                                <option value="Student">Student</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label>Your organization Name<span style="color: red">*</span></label>
                            <input type="text" v-model="organization" class="form-control"
                                placeholder="Bugando Medical Center" required>
                        </div>

                        <div class="mb-3">
                            <label>Area of work or Industry <span style="color: red">*</span></label>
                            <select class="form-control" v-model="industry">
                                <option value="">Work</option>
                                <option value="Hospital">Hospital</option>
                                <option value="Community healthcare">Community healthcare</option>
                                <option value="Nursing/care facility">Nursing/care facility</option>
                                <option value="Public health">Public health</option>
                                <option value="Non-governmental organization">Non-governmental organization
                                </option>
                                <option value="School/university">School/university</option>
                                <option value="Government">Government</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <div class="form-group">
                                <label class="control-label ">Membership type</label>
                                <select class="form-control" v-model="typeofmember">
                                    <option value="Associate Member">Associate Member</option>
                                    <option value="Ordinary Member">Ordinary Member</option>
                                </select>
                            </div>
                        </div>

                        <!-- <div class="mb-3">
                            <div class="form-group">
                                <label class="control-label" for="avatar">Avatar (Add your passport for your ID or you can update later)</label>
                                <br>
                                <input type="file" name="image" id="avatar" placeholder="passport image for your avatar" @change="onFileUpload" ref="avatar">
                            </div>
                        </div> -->

                        <!-- <template v-if="typeofmember == Ordinary Member">
                        </template> -->
                        <span v-if="typeofmember == 'Ordinary Member'">
                            <div class="mb-3">
                                <div class="form-group">
                                    <label for="mct">MCT number (optional)</label>
                                    <input type="text" v-model="mct" class="form-control" id="mct" placeholder="192000">
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="form-group">
                                    <label for="masters">Enter the year that you graduated for masters</label>
                                    <input type="text" v-model="year" class="form-control" id="year" placeholder="2007">
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="form-group">
                                    <label for="graduated">Enter the Institute attended</label>
                                    <input type="text" v-model="masters" class="form-control" id="graduated" placeholder="Muhimbili university of health and allied Sciences">
                                </div>
                            </div>

                        </span>

                        <button class="btn btn-primary btn-user mt-4 btn-block">
                            Register To PAT
                        </button>

                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
// import { computed } from '@vue/reactivity';
// import axios from 'axios';
import axiosInstance from '../http';
import router from '../router';
import { authStore } from '../stores/usersStore';

export default {
    setup(){
        const authdata = authStore();
        return {
            authdata
        }
    },
    data() {
        return {
            firstname: '',
            middlename: '',
            lastname: '',
            email: '',
            mct: '',
            password: '',
            repassword: '',
            gender: 'Female',
            region: 'Dodoma',
            phonenumber: '',
            profession: 'Researcher',
            organization: '',
            industry: 'Hospital',
            typeofmember: 'Associate Member',
            graduation: '',
            masters: '',
            year : null,
            msg: [],
            err : [],
            isDisabled:true
        }
    },
    methods: {
        // onFileUpload (event) {
        //   this.avatar = event.target.files[0]
        //   console.log(this.avatar);
        // },

        async registerUser() {
            this.authdata.isLoading = true

            const registradionData ={
                'first_name' : this.firstname,
                'middle_name' : this.middlename,
                'last_name': this.lastname,
                'email': this.email,
                'phone': this.phonenumber,
                'password': this.password,
                'mctnumber': this.mct,
                'gender': this.gender,
                'region': this.region,
                'profession': this.profession,
                'organization': this.organization,
                'areaofwork': this.industry,
                'typeofmember': this.typeofmember,
                'collage':this.masters,
                'year':this.year,
            }
            

            axiosInstance.post('auth/register/', registradionData,).
                then(response => {
                    router.push({ name: 'login' })
                }).catch(error => {
                    this.err = error.response.data.
                    console.log(error)
                })
                this.authdata.isLoading = false
        },
        validateEmail(value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.msg['email'] = '';
            } else {
                this.msg['email'] = 'Invalid Email Address';
                // this.disabled = [true, this.disabled[1]]
            }
        },

        validateFirstname(value) {
            if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value)) {
                this.msg['firstname'] = "";
            } else {
                this.msg['firstname'] = 'Invalid First name';
            }
        },
        validateLastname(value) {
            if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value)) {
                this.msg['lastname'] = "";
            } else {
                this.msg['lastname'] = 'Invalid Last name';
            }
        },
        validateMiddlename(value) {
            if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value)) {
                this.msg['middlename'] = "";
            } else {
                this.msg['middlename'] = 'Invalid Middle name';
            }
        },
        validatePhoneNumber(value) {
            if (value.len < 10) {
                this.msg['phonenumber'] = 'Invalid phone number';
            }
            else if (/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(value)) {
                this.msg['phonenumber'] = "";
            }
            else {
                this.msg['phonenumber'] = 'Invalid phone number';
            }
        },
        validatePassword(value) {
            let difference = 8 - value.length;
            if (value.length < 8) {
                this.msg['password'] = 'Must be 8 characters! ' + difference + ' characters left';
                // this.disabled = [this.disabled[1], true]
            } else {
                this.msg['password'] = '';
                // this.disabled = [this.disabled[1], false]
            }
        },
        validateRePassword(value) {
            if (value != this.password) {
                this.msg['repassword'] = "Passwords don't match";
            } else {
                this.msg['repassword'] = ''
            }
        },
        validateProffesion(value) {
            if (value == "Paediatrician") {
                this.typeofmember == "Ordinary Member"
            }
        }

    },
    watch: {
        email(value) {
            this.validateEmail(value);
        },

        firstname(value) {
            this.validateFirstname(value)

        },
        middlename(value) {
            this.validateMiddlename(value)

        },
        lastname(value) {
            this.validateLastname(value)

        },
        phonenumber(value) {
            this.validatePhoneNumber(value)
        },
        password(value) {
            this.validatePassword(value)
        },
        repassword(value) {
            this.validateRePassword(value)
        },
        profession(value) {
            this.validateProffesion(value)
        },
    }
}
</script>

<style scoped>
    ::-webkit-input-placeholder { /* Edge */
  color: rgba(0, 0, 0, 0.2);
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(0, 0, 0, 0.2);
}

::placeholder {
  color: rgba(0, 0, 0, 0.2);
}
</style>