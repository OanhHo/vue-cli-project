<template>
    <div>
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content ">
                <!-- ============================================================== -->
                <!-- pageheader  -->
                <!-- ============================================================== -->
                <div class="row row-header">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="page-header">
                            <h2 class="pageheader-title">E-commerce Dashboard Template </h2>
                            <p class="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
                            <div class="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Dashboard</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">E-Commerce Dashboard Template</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form @submit.prevent="addPerson">
                        <input
                            class="form-control input-person"
                            :value="newPerson"
                            @change="getPerson"
                            placeholder="Add person..."/>
                        <br>
                        <button type="submit" class="btn btn-primary">
                            <i class="fa fa-plus"></i> New Person
                        </button>
                    </form>
                </div>
                <br>
                <div class="row-tasks">
                    <div class="col-md-6"><ListPerson></ListPerson></div>
                    <div class="col-md-6"><CompletePerson></CompletePerson></div>
                </div>
                <br>
                <Footer/>
                <!-- ============================================================== -->
                <!-- end pageheader  -->
                <!-- ============================================================== -->
            </div>
        </div>
    </div>
</template>

<script>
import CompletePerson from './CompletePerson'
import ListPerson from './ListPerson'
import Footer from './FooterComponent'
export default {
    components: {
        CompletePerson,
        ListPerson,
        Footer
    },
    methods: {
        getPerson(e) {
            this.$store.dispatch('getPerson', e.target.value)
        },
        addPerson(e) {
            e.preventDefault();
            this.$store.dispatch('addPerson')
        }
    },
    computed: {
        newPerson() {
            return this.$store.getters.newPerson
        }
    }
}
</script>

<style>
    .ecommerce-widget {
        text-align : center
    }
    .row-header {
        margin-top: 50px;
    }
    .input-person {
        width: 300px;
    }
</style>