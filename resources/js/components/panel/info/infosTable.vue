<template>
    <div v-if = "allData" class = "card">
        <div class = "card-body">
            <table class = "table">
                <thead>
                <tr>
                    <th scope = "col"></th>
                    <th scope = "col">followers</th>
                    <th scope = "col">followers_growth</th>
                    <th scope = "col">views</th>
                    <th scope = "col">accounts_reached</th>
                    <th scope = "col">watch_time</th>
                    <th scope = "col">profile_activity</th>
                    <th scope = "col">interaction</th>
                    <th scope = "col">accounts_engaged</th>
                    <th scope = "col">likes</th>
                    <th scope = "col">comments</th>
                    <th scope = "col">saves</th>
                    <th scope = "col">shares</th>
                    <th class = "d-none d-md-table-cell" scope = "col">تاریخ ثبت</th>
                    <th scope = "col"></th>
                </tr>
                </thead>
                <tbody>

                <tr :id = "'row_'+data.id" v-for = "(data, index) in allData" :key = "data.id" :data-index = "index">
                    <td>{{ index + 1 }}</td>

                    <td>{{ data.followers}}</td>
                    <td>{{ data.followers_growth}}</td>
                    <td>{{ data.views}}</td>
                    <td>{{ data.accounts_reached}}</td>
                    <td>{{ data.watch_time}}</td>
                    <td>{{ data.profile_activity}}</td>
                    <td>{{ data.interaction}}</td>
                    <td>{{ data.accounts_engaged}}</td>
                    <td>{{ data.likes}}</td>
                    <td>{{ data.comments}}</td>
                    <td>{{ data.saves}}</td>
                    <td>{{ data.shares}}</td>
<!--                    <td class = "d-none d-xl-table-cell text_cell">{{ // data.text }}</td>-->

<!--                    <td class = "d-none d-xl-table-cell text_cell">{{ // data.text4 }}</td>-->
                    <td class = "d-none d-md-table-cell date_cell">{{ data.created_at }}</td>

                    <td>
<!--                        <span role = "button" data-bs-toggle = "dropdown" aria-expanded = "false"><i class = "bi bi-three-dots-vertical"></i></span>-->
<!--                        <ul class = "dropdown-menu" aria-labelledby = "navbarScrollingDropdown">-->
<!--                            &lt;!&ndash;                                            <li>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                <a class = "dropdown-item" style = "text-align: right !important" href = "#">مشاهده</a>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </li>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                             <li>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                <a class = "dropdown-item" style = "text-align: right !important" href = "#">ویرایش</a>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <li>&ndash;&gt;-->
<!--&lt;!&ndash;                                <router-link :to = "'/panel/info/'+data.id" class = "dropdown-item" style = "text-align: right !important">&ndash;&gt;-->
<!--&lt;!&ndash;                                    مشاهده&ndash;&gt;-->
<!--&lt;!&ndash;                                </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                                <router-link :to = "'/panel/edit/info/'+data.id" class = "dropdown-item" style = "text-align: right !important">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                                    ویرایش&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                                </router-link>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                <a class = "dropdown-item" @click = "showDeleteModal(data.id)" style = "text-align: right !important" data-bs-toggle = "modal" data-bs-target = "#exampleModal">حذف</a>&ndash;&gt;-->
<!--&lt;!&ndash;                            </li>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                <li><hr class="dropdown-divider"></li>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                <li><a class="dropdown-item" href="#">Something else here</a></li>&ndash;&gt;-->
<!--                        </ul>-->
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import AllDataContainer from "../AllDataContainer";
// import AllDataInner from "../AllData";

export default {
    props: ['allData', 'page','model','loadData'],
    name: "infosTable",
    async setup(props){
       const showDeleteModal = async (id) => {
            await AllDataContainer.setup().showDeleteModal(id);
        }
        const deleteInfo = async (model,id) => {
            await AllDataContainer.setup().deleteInfo(model,id);
            props.loadData(props.page);
        };
        const activeToggle = async (model,id) => {
            await AllDataContainer.setup().activeToggle(model,id);
            props.loadData(props.page);

        };

        return {showDeleteModal, deleteInfo, activeToggle}
    }
}
</script>

<style scoped>
td{
    text-align: center !important;
}
</style>
