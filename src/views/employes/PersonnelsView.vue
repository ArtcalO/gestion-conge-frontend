<template>
    <section class="wrapper">
        <div class="separator">
            <!-- <div></div> -->
            <strong>Liste du Personnel</strong>
            <button class="btn btn-primary" @click="logout" >Log Out</button>

            <div class="interaction">
                <div class="search-filter">
                    <div class="search-items">
                        <input
                            type="search"
                            placeholder="Chercher..."
                            v-model="keyword"
                            @keypress.enter="search"
                        />
                    </div>
                </div>
                <div>
                    <button class="btn btn-add"
                        @click="create_personnel_shown=true"
                    >
                        <i class="mdi mdi-plus"></i>
                        Ajouter Employé
                    </button>
                </div>
            </div>
        </div>

        <div class="table-container">
            <div class="table-wrap-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nom</th>
                            <th>prenom</th>
                            <th>age</th>
                            <th>genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="personnel in personnelsListe">
                            <td>{{ personnel.id }}</td>
                            <td>{{ personnel.nom }}</td>
                            <td>{{ personnel.prenom }}</td>
                            <td>{{ personnel.age }}</td>
                            <td>{{ personnel.genre }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <CreatePersonnel
            v-if="create_personnel_shown"
            @close="create_personnel_shown=false"
            @personnelEmitted="handlerCrecatePersonnel"
        ></CreatePersonnel>
    </section>
</template>
<script>
import CreatePersonnel from '@/components/CreatePersonnel.vue';
import { handleError } from 'vue';
export default {
    data(){
        return{
            create_personnel_shown:false,
            personnelsListe:this.$store.state.personnelsListe
        }
    },
    mounted(){
        var personnelsListe = localStorage.getItem("personnelsListe")
        if(personnelsListe)
            this.personnelsListe = JSON.parse(personnelsListe)
    },
    watch:{
        personnelsListe:{
            handler(newValue){
                if(newValue)
                    localStorage.setItem("personnelsListe", JSON.stringify(newValue))
            },
            deep:true
        }
    },
    methods:{
        logout(){
            this.$store.state.connected=false
            localStorage.removeItem("connected")
        },
        handlerCrecatePersonnel(data){
            this.personnelsListe.push(data)
            this.create_personnel_shown=false
        } 
    },
    components:{
        CreatePersonnel
    }
}
</script>

<style scoped>

</style>
