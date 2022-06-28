<template>
    <section class="ask_neighbors">
        <navbar-component></navbar-component>
        <div class="container mb-4 mt-4">
            <div class="row">
                <div class="col-md-6 col-12">
                    <h2 class="d-flex align-items-center mb-4 main-title">
                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                        <span>{{ keywords.the_most_discussed_questions }}</span>
                    </h2>
                    <form>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <select class="form-control" name="city">
                                        <option value="">{{ keywords.city }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <select class="form-control" name="neighbour">
                                        <option value="">{{ keywords.neighbour }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <select class="form-control" name="categories">
                                        <option value="all">{{ keywords.all_categories }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    <ul class="questions_types d-flex align-items-center justify-content-between">
                        <li class="active">
                            <inertia-link href="#">{{ keywords.the_most_discussed }}</inertia-link>
                        </li>
                        <li>
                            <inertia-link href="#">{{ keywords.unanswered }}</inertia-link>
                        </li>
                        <li>
                            <inertia-link href="#">{{ keywords.all_questions }}</inertia-link>
                        </li>
                    </ul>
                    <div class="questions">
                        <div class="question p-2" v-for="i in 6" :key="i">
                            <p>يا جماعة أنا عايز نصحيتكم، اشتري في القاهرة الجديدة (التجمع الخامس) ولا في العاصمة الإدارية</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <p>
                                    <inertia-link href="?location=1">
                                        <span>{{ keywords.location }}</span>
                                    </inertia-link>
                                    <span>{{ keywords.in }}</span>
                                    <inertia-link href="/ask-neighbours/10/answers">
                                        <span>القاهرة</span>
                                    </inertia-link>
                                </p>
                                <p>
                                    <inertia-link href="/ask-neighbours/10/answers">
                                        <span>51 {{ keywords.answers }}</span>
                                    </inertia-link>
                                </p>
                            </div>
                        </div>
                        <div class="pages text-center mt-4 mb-2">
                            <inertia-link class="active" href="#">
                                {{ 1 }}
                            </inertia-link>
                            <inertia-link href="#" v-for="i in 4" :key="i">
                                {{ i+1 }}
                            </inertia-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 ask_your_neighbors">
                    <h2 class="d-flex align-items-center mb-2 main-title">
                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                        <span>{{ keywords.ask_your_neighbors }}</span>
                    </h2>
                    <p class="mb-2">{{ keywords.write_your_question_and_get_answers_from_the_community }}</p>
                    <form>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <select class="form-control" name="city" required>
                                        <option value="">{{ keywords.city }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <select class="form-control" name="neighbour" required>
                                        <option value="">{{ keywords.neighbour }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <select class="form-control" name="categories" required>
                                        <option value="all">{{ keywords.all_categories }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mt-2">
                                <textarea class="form-control mb-2"
                                          name="question"
                                          :placeholder="keywords.ask_a_question_and_get_answers_from_neighbors"></textarea>
                                <input class="btn btn-primary" type="submit" :value="keywords.add_question">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <sale-rent-component></sale-rent-component>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SaleRentComponent from "../../components/SaleRentComponent";
export default {
    name: "ask_neighbors",
    props:['keywords'],
    components: {SaleRentComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.ask_your_neighbors{
    >p{
        color:$gray;
    }
}
.questions_types{
    border-bottom: 1px solid #dddddd;
    padding-bottom: 5px;
    li{
        a{
            color:$dark_gray;
        }
        position: relative;
        transition: 0.5s all;
        &::before{
            content: '';
            width: 0px;
            height: 2px;
            background-color: $main_color;
            position: absolute;
            bottom: -6.5px;
            transition: 0.5s all;
        }
        &:hover::before{
            width:100%;
        }
        &:hover a{
            color:$main_color;
        }
    }
    li.active{
        a{
            color:$main_color;
        }
        &::before{
            width:100%;
        }
    }
}
.questions{
    .question{
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
        p{
            color:$dark_gray;
            margin-bottom: 5px;
        }
        div{
            a{
                color:$main_color;
                span{
                    color:$main_color;
                }
            }
        }
    }
}
.pages{
    margin: 25px auto;
    width: fit-content;
    a{
        margin-left: 8px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: inline-flex;
        border: 1px solid #ddd;
        justify-content: center;
        align-items: center;
        transition: 0.5s all;
        &:hover{
            background-color: $main_color;
            color:white;
        }
    }
    a.active{
        background-color: $main_color;
        color: white;
    }
}
</style>
