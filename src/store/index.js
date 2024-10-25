import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        user:null,
        db:{
          username:"ArtcalO",
          password:"1234"
        },
        listeEmployes:[
            {
                id:1,
                nom:"Artcal'O",
                prenom:"Lone Wolf",
                age:45,
                genre:"F",
                conge_debut:null,
                conge_fin:null
            },
            {
                id:2,
                nom:"TLW",
                prenom:"Wolverine",
                age:45,
                genre:"F",
                conge_debut:null,
                conge_fin:null
            },
        ],
        personnelsListe:[
          {
            id:2,
            nom:"TLW",
            prenom:"Wolverine",
            age:45,
            genre:"F",
          },
          
        ]
        
    }
  },
})

export default store