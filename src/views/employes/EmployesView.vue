<template>
    <section class="wrapper">
        <div class="separator">
            <!-- <div></div> -->
            <strong>Liste des utilisateur</strong>

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
                    <button class="btn btn-add" @click="modal_add_employe_shown=true" >
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
                            <th>Index</th>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Age</th>
                            <th>Genre</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="employe, i in listeEmployes"
                            :key="employe.id"
                            :class="{en_conge:enConge(employe)}"

                            >
                            <td>{{i}}</td>
                            <td>{{employe.id}}</td>
                            <td>{{employe.nom}}</td>
                            <td>{{employe.prenom}}</td>
                            <td>{{employe.age}}</td>
                            <td>{{employe.genre}}</td>
                            <td>{{enConge(employe)?'En congé':'Pas en congé'}}</td>
                            <td class="act">
                                <button
                                    v-if="checkConge(employe)"
                                    @click="addCongeEmploye(employe.id)"
                                    class="btn-sm btn-primary"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                    Ajouter Congé
                                </button>
                                <button
                                    @click="modifierEmploye(employe)"
                                    class="btn-sm btn-primary"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                    Modifier
                                </button>
                                <button
                                    @click="deleteEmploye(i)"
                                    class="btn-sm btn-danger"
                                >
                                    <i class="mdi mdi-delete"></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       <CreateEmploye
            v-if="modal_add_employe_shown"
            @close="modal_add_employe_shown=false"
            @createEmployeEmitted="handlerCreateEmploye"
            ></CreateEmploye>
    </section>
</template>
<script>
import CreateEmploye from '@/components/CreateEmploye.vue';
export default {
    data(){
        return{
            modal_add_employe_shown:false,
            modal_add_conge:false,
            modal_modifier_conge:false,
            employeObj:{},
            idEmployeObj:{},
            listeEmployes:[]
        }
    },
    components:{
        CreateEmploye
    },
    mounted(){
        var listeEmployes = localStorage.getItem("listeEmployes")
        if(listeEmployes)
            this.listeEmployes = JSON.parse(listeEmployes)
    },
    watch:{
        listeEmployes: {
            handler(newValue) {
                if(newValue)
                    localStorage.setItem("listeEmployes", JSON.stringify(newValue));
            },
            deep: true
        }
    },
    methods: {
      modifierEmploye(o) {
        this.employeObj=o
        this.modal_modifier_conge=true
      },
      deleteEmploye(idx){
        this.listeEmployes.splice(idx,1)
      },
      handlerCreateEmploye(data){
        this.listeEmployes.push(data)
        this.modal_add_employe_shown=false
      },
      addCongeEmploye(employeId){
        this.modal_add_conge=true
        this.idEmployeObj=employeId
      },
      handlerAddConge(data){
        //recuperer l'indice de l'objet dans la liste d'objet
        console.log(data.idEmploye)
        let idx = this.listeEmployes.findIndex(x=>x.id==data.idEmploye)
        console.log(idx)
        this.listeEmployes[idx].conge_debut=data.conge_debut
        this.listeEmployes[idx].conge_fin=data.conge_fin

        console.log(this.listeEmployes)

      },
      checkConge(employe){
        return !employe.conge_debut && !employe.conge_fin
      },
      enConge(employe){
        let today = new Date()
        return today >= new Date(employe.conge_debut) && today < new Date(employe.conge_fin)
      }
    },
}
</script>

<style scoped>
.en_conge{
    background-color:red;
}
</style>
