console.log("Vue Ok", Vue);

Vue.config.devtools = true;
/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const app = new Vue({
   el: "#root",
   data: {
      userName: "",
      userPic: "",
   },
   methods: {
      normalPic() {
         if (!this.userPic) {
            this.userPic = "https://i.kym-cdn.com/entries/icons/original/000/037/347/coverfight.jpg";
            console.log("CIAO");
         }
      },
   },
});

normalPic = () => {
   if (!app.userPic) {
      app.userPic = "https://curiosoggi.it/wp-content/uploads/2021/10/Chi-e-Hasbulla-mini-Khabib.jpg";
      console.log("CIAO");
   }
};

setInterval(normalPic, 9000);
