<template>
  <h1>Create employe</h1>
  <div>
    <div>
        <label for="nom">Nom</label>
        <input type="text" name="nom" id="" v-model="nom">
    </div>
    <div>
        <label for="prenom">Prenom</label>
        <input type="text" name="prenom" id="" v-model="prenom">
    </div>

    <button @click="addEmploye">Ajouter Employe</button>
    <button @click="modifierEmploye">Modifier Employe</button>

  </div>
</template>

<script>
export default {
    props:["employeProp"],
    data(){
        return{
            nom:"",
            prenom:""
        }
    },
    mounted(){
      this.nom = this.employeProp.nom
      this.prenom = this.employeProp.prenom
    },
    methods:{
        addEmploye(){
            let data = {
                nom:this.nom,
                prenom:this.prenom
            }
            this.$emit("createEmployeEmitted",data)
        },
        modifierEmploye(){
            let data = {
                nom:this.nom,
                prenom:this.prenom
            }
            this.$emit("modifyEmployeEmitted",data)
        }
    }
}
</script>

<style>

</style>