<template>
    <section class="merchant-balance">
        <navbar-component></navbar-component>
        <div class="container mt-4 mb-4">
            <h2 class="d-flex align-items-center mb-4 main-title">
                <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                <span>{{ keywords.my_credit }}</span>
            </h2>
            <p>
                <span>{{ keywords.account_number }}</span>
                <span>#3123</span>
            </p>
            <div class="current_balance d-flex align-items-center justify-content-between">
                <p>
                    <span>{{ keywords.current_balance }} :</span>
                    <span>0</span>
                </p>
                <inertia-link href="/credit/charge" class="btn btn-primary">
                    {{ keywords.charge_credit }}
                </inertia-link>
            </div>
            <table class="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <td>{{ keywords.amount }}</td>
                        <td>{{ keywords.balance }}</td>
                        <td>{{ keywords.description }}</td>
                        <td>{{ keywords.date }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 6" :key="i">
                        <td>100</td>
                        <td>2000</td>
                        <td>عمليه شحن رصيد ناجحه</td>
                        <td>12/02/2023</td>
                    </tr>
                </tbody>
            </table>
            <inertia-link href="/credit/charge" class="btn btn-primary d-block m-auto fit-content">
                {{ keywords.charge_credit }}
            </inertia-link>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
export default {
    name: "balance",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.current_balance{
    margin: 15px 0px;
    padding: 10px;
    border: 2px dashed $main_color;
}
</style>
