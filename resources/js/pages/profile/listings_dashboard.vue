<template>
    <section class="listings_dashboard">
        <navbar-component></navbar-component>
        <div class="inner">
            <profile-nav-component></profile-nav-component>
            <div class="tabs mt-4">
                <div class="container">
                    <ul class="d-flex justify-content-between mt-3">
                        <li class="w-100 text-center" v-for="(i,index) in ['live_listings','rejected_listings','expired_listings','pending_listings','deleted_listings','draft_listings']" :key="index">
                            <inertia-link :href="'?tab='+i">
                                <span>{{ keywords[i] }}</span>
                                <span v-if="index <= 9">{{ index + 1 }}</span>
                                <span v-else>+9</span>
                            </inertia-link>
                        </li>
                    </ul>
                </div>
            </div>

           <div class="outer_content_data">
               <div class="container">
                   <div class="content">
                       <div v-for="i in Object.keys(data)" :key="i" :class="i">
                           <p class="mb-2">{{ data[i]['text'] }}</p>
                           <ul v-if="Object.keys(data[i]).includes('more_text_info')">
                               <li v-for="(more_txt,index) in data[i]['more_text_info']" :key="index">
                                   {{ more_txt }}
                               </li>
                           </ul>
                           <div class="data-table-box">
                               <table class="myTable table table-bordered table-striped table-hover">
                                   <thead>
                                   <tr>
                                       <td
                                           v-for="name in Object.keys(data[i]['table_keywords'])"                                                              :key="name">
                                           {{ keywords[name] }}
                                       </td>
                                   </tr>
                                   </thead>

                                   <tbody>
                                   <tr v-for="(row_val,index) in data[i]['data']"                                                      :key="index">
                                       <td v-for="(td_val,index) in Object.values(row_val)"
                                           :key="index">{{ td_val }}</td>
                                       <td class="actions_control" v-if="Object.keys(
                                                    data[i]['table_keywords']
                                                ).includes('actions')">
                                           <div class="dropdown">
                                               <button class="btn btn-primary dropdown-toggle"
                                                       type="button" id="dropdownMenuButton"
                                                       data-toggle="dropdown" aria-haspopup="true"
                                                       aria-expanded="false">
                                                        <span>
                                                            <i class="ri-edit-line"></i>
                                                        </span>
                                               </button>
                                               <div class="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton">
                                                   <inertia-link
                                                       class="dropdown-item"
                                                       href="#">
                                                       {{ keywords.update_info }}
                                                   </inertia-link>
                                                   <inertia-link
                                                       class="dropdown-item"
                                                       href="#">
                                                       {{ keywords.update_photos }}
                                                   </inertia-link>
                                               </div>
                                           </div>
                                           <button class="btn btn-danger">
                                                    <span>
                                                        <i class="ri-close-line"></i>
                                                    </span>
                                           </button>
                                       </td>
                                   </tr>
                                   </tbody>

                               </table>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileNavComponent from "../../components/ProfileNavComponent";
import tableData from "../../mixin/tableData";
export default {
    name: "listings_dashboard",
    props:['keywords','data'],
    mixins:[tableData],
    components: {ProfileNavComponent, FooterComponent, NavbarComponent},
    mounted() {
        if(document.URL.split('?tab=')[1] == undefined){
            $('.listings_dashboard .inner .tabs ul li').eq(0).addClass('active');
            $('.listings_dashboard .inner .outer_content_data .content > div').eq(0).addClass('active');
        }else{
            for(let a of document.querySelectorAll('.listings_dashboard .inner .tabs ul li a')){
                if(a.getAttribute('href') == document.URL.split('dashboard')[1]){
                    a.parentElement.className = 'active w-100 text-center';
                    $('.listings_dashboard .inner .outer_content_data .content > div.'+a.getAttribute('href').replace('?tab=','')).addClass('active');
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.listings_dashboard{
    .inner{
        ul{
            border-bottom: 1px solid #ddd;
            li{
                padding: 10px;
                a{
                    span:last-of-type{
                        background-color:$red;
                        width: 22px;
                        height: 22px;
                        border-radius: 50%;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                    }
                }
            }
            li.active{
                box-shadow: 0px 0px 8px 1px #ddd;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
                a{
                    color:$main_color;
                    font-weight: bold;
                }
            }
        }
        .tabs{

        }
    }
    .outer_content_data{
        .content{
            border: 1px solid #dddddd;
            border-top: none;
            >div{
                display: none;
                padding: 15px;
                p{
                    font-weight: bold;
                }
            }
            >div.active{
                display: block;
            }
            ul{
                list-style: decimal-leading-zero;
                list-style-position: inside;
            }
        }
    }
}


table{
    thead{
        tr{
            td{
                border-bottom: none;
            }
        }
        tbody{
            tr{
                td{
                    border-bottom: none;
                }
            }
        }
    }
    td.actions_control{
        display: flex;
        justify-content: center;
        border: none;
        border-top: 1px solid #dddddd;
        button,button[data-toggle="dropdown"]{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            padding: 0;
            span{
                color:white;
            }
        }
        button[data-toggle="dropdown"]{
            margin-left: 5px;
            margin-right: 5px;
            &::after{
                display: none;
            }
        }
    }
    td{
        text-align: center;
    }
}


@media (max-width: 567px) {
    .listings_dashboard{
        .tabs{
            ul{
                flex-wrap: wrap;
                li{
                    a{
                        width:100%;
                        display: block;
                        direction: initial;
                    }
                }
            }
        }
    }
}

</style>
