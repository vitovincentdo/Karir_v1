import Controller from '@ember/controller';

export default Controller.extend({
    Newtitle:'',
    Newarticle: '',

    actions:{
        saveArticle(){
            const title = this.get('Newtitle')
            const article = this.get('Newarticle')

            const newArticle = this.get('store').createRecord('data',{
                title: title,
                article: article
            })
            newArticle.save();

            this.set('Newtitle', '');
            this.set('Newarticle', '');
        }
    }
});
