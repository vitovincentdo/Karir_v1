import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.findRecord('data', params.article_id);
    },

    actions: {
        saveArticle(newArticle) {
            newArticle.save().then(() => this.transitionTo('/admin/listArticle'));
        },

        willTransition(transition) {
            let model = this.controller.get('model');

            if (model.get('hasDirtyAttributes')) {
                let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

                if (confirmation) {
                    model.rollbackAttributes();
                } 
                else {
                    transition.abort();
                }
            }
        }
    }
    // model(params) {
    // return this.store.findRecord('article', params.article_id);
    // },
    
    // actions: {
    
    //     saveArticle(newArticle){
    //       newArticle.save().then(() => this.transitionTo('/admin/listArticle'));
    //      },
    
    //     willTransition(transition) {
    
    //         let model = this.controller.get('model');
    
    //         if (model.get('hasDirtyAttributes')) {
    //             let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
    
    //             if (confirmation) {
    //             model.rollbackAttributes();
    //             } else {
    //             transition.abort();
    //             }
    //         }
    //     }
    // }
});
