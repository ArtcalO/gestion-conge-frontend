<template>
	<OverlayView>
        <div class="form-group">
                    <label>Id</label>
                    <input type="text" v-model="id" autofocus required />
                </div>
                <div class="form-group">
                    <label>Nom</label>
                    <input type="text" v-model="nom" autofocus required />
                </div>
                <div class="form-group">
                    <label>Prenom</label>
                    <input type="text" v-model="prenom" autofocus required />
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="text" v-model="age" autofocus required />
                </div>
                <div class="form-group">
                    <label>Genre</label>
                    <input type="text" v-model="genre" autofocus required />
                </div>
                <div>
                    <input
                    class="btn btn-primary"
                    @click="enregistrer"
                    type="submit"
                    value="Ajouter"
                    />
                </div>
    </OverlayView>
</template>

<script>
import OverlayView from './OverlayView.vue';
export default {
	props: ["title"],
    data(){
        return{
            id:"",
            nom:"",
            prenom:"",
            age:"",
            genre:"",
        }
    },
    components:{
        OverlayView
    },
	methods: {
		close() {
			this.$emit("close");
		},
        enregistrer(){
            let data = {
                id:this.id,
                nom:this.nom,
                prenom:this.prenom,
                age:this.age,
                genre:this.genre
            }
            this.$emit("personnelEmitted", data)
        }
	},
};
</script>

<style scoped>
h4 {
	color: white;
}
.dialog {
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(3px);
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.dialog-body {
	width: 45%;
	background: var(--color-white);
	position: relative;
}
.big-dialog {
	width: 65%;
}
.massive-dialog {
	width: 75%;
}
.dialog-body .d-head {
	background: var(--color-primary);
	padding: 1.4em;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.dialog-body .close {
	color: var(--color-white);
	cursor: pointer;
}
.dialog-body .close .mdi {
	font-size: 20px;
}
.dialog-body .d-body {
	padding: 1.4em;
	position: relative;
}

@media only screen and (max-width: 600px) {
	.dialog-body {
		width: 340px;
	}
}
@media only screen and (max-width: 340px) {
	.dialog-body {
		width: 280px;
	}
}
</style>
