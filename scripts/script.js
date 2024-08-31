new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        
        showquisommesnous: false, // Initialisation du formulaire masqué
        showaccueil: true,
        shownosevenement: false,
        showicienmayenne: false,
        showlabasamadagascar: false,
        showambohitheque: false,
        ouvragesAmbohitheque: [
{
  titre: 'Le Petit Prince',
  auteur: 'Antoine de Saint-Exupéry',
  editeur: 'Éditions Gallimard',
  anneeEdition: 1943,
  photo: 'C:/Users/DELL/SitewebAmbohimad/Image/profil2.jpg',
  resume: 'Un conte philosophique qui raconte l\'histoire d\'un jeune prince qui voyage de planète en planète. ER uhsbbbb uzxbub uzybixz uzbxub Un conte philosophique qui raconte l\'histoire d\'un jeune prince qui voyage de planète en planète. ER uhsbbbb uzxbub uzybixz uzbxub Un conte philosophique qui raconte l\'histoire d\'un jeune prince qui voyage de planète en planète. ER uhsbbbb uzxbub uzybixz uzbxub',
},
{
  titre: 'Les Misérables',
  auteur: 'Victor Hugo',
  editeur: 'Éditions Hachette',
  anneeEdition: 1862,
  photo: 'C:/Users/DELL/SitewebAmbohimad/Image/profil2.jpg',
  resume: 'Un conte philosophique qui raconte l\'histoire d\'un jeune prince qui voyage de planète en planète. ER uhsbbbb uzxbub uzybixz uzbxub Un conte philosophique qui raconte l\'histoire d\'un jeune prince qui voyage de planète en planète. ER uhsbbbb uzxbub uzybixz uzbxub Un conte philosophique qui raconte l\'histoire d\'un jeune prince qui voyage de planète en planète. ER uhsbbbb uzxbub uzybixz uzbxub',
},
{
  titre: '1984',
  auteur: 'George Orwell',
  editeur: 'Secker & Warburg',
  anneeEdition: 1949,
  photo: 'C:/Users/DELL/SitewebAmbohimad/Image/profil2.jpg',
  resume: 'Un conte philosophique qui raconte l\'histoire d\'un jeune prince qui voyage de planète en planète. ER uhsbbbb uzxbub uzybixz uzbxub Un conte philosophique qui raconte l\'histoire d\'un jeune prince qui voyage de planète en planète. ER uhsbbbb uzxbub uzybixz uzbxub Un conte philosophique qui raconte l\'histoire d\'un jeune prince qui voyage de planète en planète. ER uhsbbbb uzxbub uzybixz uzbxub',
}
],

        evenementsicienmayenne: [
            {
                nom: 'Exposition artisanale',
                heure: '14:00',
                lieu: 'Salle d\'exposition',
                description: 'Découvrez les œuvres d\'artisans locaux et participez à des ateliers interactifs. Un concert en plein air avec des artistes locaux pour célébrer l\'été.',
                photo: 'C:/Users/DELL/SitewebAmbohimad/Image/profil2.jpg'
            },
            {
                nom: 'Concert en plein air',
                heure: '19:00',
                lieu: 'Parc du château',
                description: 'Un concert en plein air avec des artistes locaux pour célébrer l\'été. ',
                photo: 'C:/Users/DELL/SitewebAmbohimad/Image/profil2.jpg'
            },
            {
                nom: 'Atelier de peinture',
                heure: '10:00',
                lieu: 'Centre culturel',
                description: 'Participez à un atelier de peinture ouvert à tous les niveaux.',
                photo: 'C:/Users/DELL/SitewebAmbohimad/Image/profil2.jpg'
            }
        ],

        evenementsici: [
        {
            description: 'Rencontre littéraire avec Michèle Rakotoson',
            heure: '18h',
            lieu: 'Bibliothèque Albert Legendre, Laval',
            date:'Jeudi 21 mars'
        },
        {
            description: 'juin Pique-nique Fête de lindependance',
            heure: '12h',
            lieu: 'Lieu à confirmer',
            date:'Samedi 29 juin'
        },
        {
            description: 'Bol de riz',
            heure: '19h',
            lieu: 'Salle des Fourches, Laval',
            date:'Samedi 23 novembre'
        }
    ],

    evenementslabas: [
        {
            nom: 'Atelier de fabrication de compost',
            heure: '14:00',
            lieu: 'Centre communautaire Ambohimad'
        },
        {
            nom: 'Conférence sur l\'agriculture durable',
            heure: '10:00',
            lieu: 'Salle des fêtes'
        },
        {
            nom: 'Marché de producteurs locaux',
            heure: '08:00',
            lieu: 'Place du village'
        }
    ],

        membres: [
    {
        nom: 'Jean Dupont',
        role: 'Président',
        photo:'C:/Users/DELL/SitewebAmbohimad/Image/profil2.jpg'
    },
    {
        nom: 'Marie Curie',
        role: 'Vice-Présidente',
        photo: 'C:/Users/DELL/SitewebAmbohimad/Image/prolie.jpg'
    },
    {
        nom: 'Ali Vardar',
        role: 'Secrétaire',
        photo: 'C:/Users/DELL/SitewebAmbohimad/Image/profil2.jpg'
    },
    {
        nom: 'Lucie Martin',
        role: 'Trésorière',
        photo: 'C:/Users/DELL/SitewebAmbohimad/Image/profil2.jpg'
    },

    
]
        
    },
    methods: {
        ShowQuiSommesNous() {
            console.log("OUI");
            this.showaccueil= false;
            this.showquisommesnous= true;
            this.shownosevenement = false; // Affiche le formulaire lors du clic sur "Faire un don"
            this.showicienmayenne=false;
            this.showlabasamadagascar=false;
            this.showambohitheque=false;
        },
        ShowNosEvenement() {
            this.showaccueil= false;
            this.showquisommesnous= false;
            this.shownosevenement = true; // Affiche le formulaire lors du clic sur "Faire un don"
            this.showicienmayenne=false;
            this.showlabasamadagascar=false;
            this.showambohitheque=false;
        },
        ShowIciEnMayenne() {
            this.showaccueil= false;
            this.showquisommesnous= false;
            this.shownosevenement = false; // Affiche le formulaire lors du clic sur "Faire un don"
            this.showicienmayenne=true;
            this.showlabasamadagascar=false;
            this.showambohitheque=false;
        },
        ShowLabasAMadagascar() {
            this.showaccueil= false;
            this.showquisommesnous= false;
            this.shownosevenement = false; // Affiche le formulaire lors du clic sur "Faire un don"
            this.showicienmayenne=false;
            this.showlabasamadagascar=true;
            this.showambohitheque=false;
        },
        ShowAmbohitheque() {
            this.showaccueil= false;
            this.showquisommesnous= false;
            this.shownosevenement = false; // Affiche le formulaire lors du clic sur "Faire un don"
            this.showicienmayenne=false;
            this.showlabasamadagascar=false;
            this.showambohitheque=true;

        }
        
    }
})