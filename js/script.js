/*
1. Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

2. Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const app = new Vue({
    el: "#app",

    data: {
        emails: [],
        totalNumberOfEmails: 10,
        loading: true,
    },

    methods: {
        getEmail(){
            for(let i = 0; i < this.totalNumberOfEmails; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((res)=>{
                    this.emails.push(res.data.response);
                    console.log(this.emails);
                });
            };
            this.waiting();
        },
        waiting(){
            setTimeout(()=>{
                this.loading = false;
                console.log("------>", this.loading);
            }, 2000)
        }
    },

    mounted(){
        this.getEmail();
    }
})