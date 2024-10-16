<template>
    <transition name="route" mode="out-in" appear>
        <section>
            <h3 class="mb-5">ثبت insight جدید</h3>

            <div class="row mt-3 ">
                <div class="col-12 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <form id="editForm" @click="e => enableClick">

                                <div class="row en">
                                    <div class="col-md-3  mb-3 en">
                                        <label for="followers" class="form-label">followers</label>
                                        <input type="number" :class="{hasError: errors.followers}"
                                               class="form-control en"
                                               id="followers" aria-describedby="followersHelp" required>
                                        <div id="followersHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.followers">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="followers_growth" class="form-label">followers_growth</label>
                                        <input type="number" :class="{hasError: errors.followers_growth}"
                                               class="form-control en"
                                               id="followers_growth" aria-describedby="follower_growthsHelp" required>
                                        <div id="followers_growthHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.followers_growth">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="likes" class="form-label">likes</label>
                                        <input type="number" :class="{hasError: errors.likes}"
                                               class="form-control en"
                                               id="likes" aria-describedby="likesHelp" required>
                                        <div id="likesHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.likes">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="comments" class="form-label">comments</label>
                                        <input type="number" :class="{hasError: errors.comments}"
                                               class="form-control en"
                                               id="comments" aria-describedby="commentsHelp" required>
                                        <div id="commentsHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.comments">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="views" class="form-label">views</label>
                                        <input type="number" :class="{hasError: errors.views}"
                                               class="form-control en"
                                               id="views" aria-describedby="viewsHelp" required>
                                        <div id="viewsHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.views">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="accounts_reached" class="form-label">accounts_reached</label>
                                        <input type="number" :class="{hasError: errors.accounts_reached}"
                                               class="form-control en"
                                               id="accounts_reached" aria-describedby="accounts_reachedHelp" required>
                                        <div id="accounts_reachedHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.accounts_reached">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="watch_time" class="form-label">watch_time</label>
                                        <input type="number" :class="{hasError: errors.watch_time}"
                                               class="form-control en"
                                               id="watch_time" aria-describedby="watch_timeHelp" required>
                                        <div id="watch_timeHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.watch_time">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="profile_activity" class="form-label">profile_activity</label>
                                        <input type="number" :class="{hasError: errors.profile_activity}"
                                               class="form-control en"
                                               id="profile_activity" aria-describedby="profile_activityHelp" required>
                                        <div id="profile_activityHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.profile_activity">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="interaction" class="form-label">interaction</label>
                                        <input type="number" :class="{hasError: errors.interaction}"
                                               class="form-control en"
                                               id="interaction" aria-describedby="interactionHelp" required>
                                        <div id="interactionHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.interaction">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="accounts_engaged" class="form-label">accounts_engaged</label>
                                        <input type="number" :class="{hasError: errors.accounts_engaged}"
                                               class="form-control en"
                                               id="accounts_engaged" aria-describedby="accounts_engagedHelp" required>
                                        <div id="accounts_engagedHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.accounts_engaged">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="shares" class="form-label">shares</label>
                                        <input type="number" :class="{hasError: errors.shares}"
                                               class="form-control en"
                                               id="shares" aria-describedby="sharesHelp" required>
                                        <div id="sharesHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.shares">{{ e }}</p>
                                    </div>
                                    <div class="col-md-3  mb-3 en">
                                        <label for="saves" class="form-label">saves</label>
                                        <input type="number" :class="{hasError: errors.saves}"
                                               class="form-control en"
                                               id="saves" aria-describedby="savesHelp" required>
                                        <div id="savesHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.saves">{{ e }}</p>
                                    </div>


                                </div>


                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <BtnSubmit @click.prevent="createInfo">
                                            ثبت
                                        </BtnSubmit>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </transition>

</template>

<script>
import ImageCropper from '../../components/ImageCropper';
import BtnSubmit from "../../components/BtnSubmit";
import Editor from "../../components/Editor";

export default {
    components: {Editor, ImageCropper, BtnSubmit},
    data: function () {
        return {
            info: [],
            errors: [],
        }
    },
    mounted() {
    this.loadData();
        },
    methods: {
        loadData() {
            axios.get('https://api.notjustanalytics.com/profile/ig/history/65105100201?follower=&following=&post=&date=')
                .then((response) => {
                    console.log('aaa',response);
                })
                .catch();
        },

        async createInfo() {
            this.errors = [];
            let emptyFieldsCount = 0;
            let req = document.querySelectorAll('[required]');
            req.forEach((element) => {
                if (element.value === "") {
                    element.classList.add('hasError');
                    element.nextSibling.innerHTML = "فیلد اجباری";
                    emptyFieldsCount++;
                } else {
                    element.classList.remove('hasError');
                    element.nextSibling.innerHTML = "";
                }
            });
            if (emptyFieldsCount === 0) {
                await axios.post('/api/panel/info', {
                    followers  : document.getElementById('followers').value,
                    followers_growth : document.getElementById('followers_growth').value,
                    views: document.getElementById('views').value,
                    accounts_reached: document.getElementById('accounts_reached').value,
                    watch_time: document.getElementById('watch_time').value,
                    profile_activity: document.getElementById('profile_activity').value,
                    interaction: document.getElementById('interaction').value,
                    accounts_engaged : document.getElementById('accounts_engaged').value,
                    likes: document.getElementById('likes').value,
                    comments: document.getElementById('comments').value,
                    saves: document.getElementById('saves').value,
                    shares: document.getElementById('shares').value
                })
                    .then((response) => {
                        console.log(response.data)
                        if (response.status === 201 || response.status === 200) {
                            setTimeout(() => {
                                this.$router.push({path: '/panel/infos'});
                            }, 1000);

                        }
                    })
                    .catch((error) => {
                        if (error.status === 422) {
                            let errorList = Array(error.response.data);
                            for (var i = 0; i < errorList.length; i++) {
                                this.errors = errorList[i];
                            }
                            console.log(this.errors.toString());
                        } else if (error.status === 500) {
                            if (error.response.data.message.includes("SQLSTATE")) {
                                console.error('خطای پایگاه داده');

                                async function showAlertSql() {
                                    setTimeout(() => {
                                        alert(error.data.message);
                                    }, 200);
                                }

                                showAlertSql();
                            } else {
                                async function showAlert500() {
                                    setTimeout(() => {
                                        alert(error.message + ' '
                                            + error.response.data.message);
                                    }, 200);
                                }

                                showAlert500();
                            }
                        } else {

                            async function showAlert() {
                                setTimeout(() => {
                                    alert(error.message);
                                }, 200);
                            }

                            showAlert();
                        }

                    })
            }
        },
        watchTextAreas() {
            let txt = document.querySelector("#text");
            txt.setAttribute("style", "height:" + (txt.scrollHeight + 20) + "px;overflow-y:hidden;");
            txt.addEventListener("input", changeHeight, false);

            function changeHeight() {
                this.style.height = "auto";
                this.style.height = (this.scrollHeight) + "px";
            }
        },


    }
}
</script>
<style>
span i {
    cursor: pointer;
}
</style>
