import Route from '@ember/routing/route';
// import article from '../../../models/article';

export default Route.extend({
    model(){
        return this.get('store').findAll('article');
    },

    actions:{
        deleteArticle(article) {
            let confirmation = confirm('Are you sure?');
      
            if (confirmation) {
              article.destroyRecord().then(() => this.transitionTo('/admin/listArticle'));
            }
          }
    }
//    model(){
//         // return Ember.$.getJSON('/public/assets/content/Article.json');
//         // const model = this.store.query('article', { title: 'ktm' });

//         // model.then((data) => {
//         //     console.log(data);
//         // });

//         // return model;
//         return this.store.findAll('article');
//    },

//    actions:{ 
//        deleteArticle(articles){
//             let confirmation = confirm("Are You Sure?");

//             if(confirmation){
//                 articles.destroyRecord();
//             }
//        }
//    }

// actions:{
//     deleteUser(user) {
//         let confirmation = confirm('Are you sure?');
  
//         if (confirmation) {
//           user.destroyRecord().then(() => this.transitionTo('users'));
//         }
//       }
// }
});
