<template>
  <h1>Page employes</h1>
  <CreateEmploye
    v-if="add_employe_form"
    :employeProp="employeObj"
    @createEmployeEmitted="handlerCreateEmployeEmitted"
    @modifyEmployeEmitted="handlerModifyEmployeEmitted"
    ></CreateEmploye>
  <button @click="add_employe_form=!add_employe_form">+ Employe</button>
  <table>
    <thead>
        <th>Id</th>
        <th>Nom</th>
        <th>Premom</th>
        <th>Options</th>
    </thead>
    <tbody>
        <tr v-for="employe in employesList">
            <td>{{ employe.id }}</td>
            <td>{{ employe.nom }}</td>
            <td>{{ employe.prenom }}</td>
            <td><button @click="modifier(employe)">Modifier</button></td>
        </tr>
        
    </tbody>
  </table>
</template>

<script>
import CreateEmploye from "../components/CreateEmploye.vue"
export default {
    data(){
        return {
            employesList : [
                {id:1,nom:"TLW",prenom:"ArtcalO"},
                {id:2,nom:"TLW2",prenom:"ArtcalO2"},
                {id:3,nom:"TLW3",prenom:"ArtcalO3"},
            ],
            add_employe_form:false,
            employeObj:null
        }
    },
    components:{
        CreateEmploye
    },
    methods:{
        handlerCreateEmployeEmitted(data){
            this.employesList.push(data)
        },
        handlerModifyEmployeEmitted(data){
            alert("Modifier")
        },
        modifier(employe){
            this.add_employe_form=true
            this.employeObj = employe
        }
    }
}
</script>

<style>

</style>