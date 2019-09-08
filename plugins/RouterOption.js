import firebase from "@/plugins/firebase.js"

export default async ({ app,store }) => {
    app.router.afterEach((to, from) => {

        let page_name;
        page_name = to.name;
        
        const firebase = require('firebase/app');
        require('firebase/auth');

        firebase.auth().onAuthStateChanged((user) => {
            console.log(user.displayName);
            if(!user){
                store.commit('user_info/logout');
                switch(page_name){
                    case "index" :
                        console.log("index page。");
                        break;
                    default :
                        var provider = new firebase.auth.GoogleAuthProvider();
                        firebase.auth().signInWithRedirect(provider);

                        break;
                }
            }
            else {
                console.log(user.displayName);
                store.commit('user_info/login', user.displayName);
            }
        });

        
    
    });
};