<template>

</template>

<script>
export default {
    name: "tableData",
    mounted() {
        if(this.$inertia.page.props.lang == 'ar'){
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
        }else{
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
        }
        jQuery( document ).ready(function( $ ) {
            $('.myTable').DataTable( {
                language: {
                    url: url,
                },
                dom: 'lBfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'print'
                ]
            } );
        });
    }
}
</script>

<style lang="scss" scoped>

</style>
