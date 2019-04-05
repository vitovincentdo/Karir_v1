import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';
import { mapBy } from '@ember/object/computed';

export default Controller.extend({
    // selectedItems:[],
      
    actions: {
        valueHasChanged(value) {
            this.set('model.featured', value)
            // console.log(job.Featured)
            // console.log(value)
            // this.set(job.Featured,value)
            // this.get('selectedItems').addObject(job);
            // job.save();
            // Do something useful
        },
        // saveChanged(job){
        //     job.save();
        // }
        // valueHasChanged(job, isChecked){
        //     if (isChecked) {
        //     this.get('selectedItems').addObject(job);
        //     }
        //     else {
        //     this.get('selectedItems').removeObject(job);
        //     }
        // }
    }
    // init() {
    //     this._super(...arguments);
    //     this.items = [
    //       { id: 1, name: 'first' },
    //       { id: 2, name: 'second' },
    //       { id: 3, name: 'third' },
    //       { id: 4, name: 'fourth' }
    //     ];
    //     this.selectedItems = [];
    //   },

    // actions:{
    //     valueHasChanged(job, isChecked){
    //         if (isChecked) {
    //           this.get('selectedItems').addObject(job);
    //           console.log('selectedItems');
    //         }
            // else {
            //   this.get('selectedItems').removeObject(item);
            // }
        //   }
        // spamDecide: function(model){
        //     let checkedModels = filterBy(model, 'isCheck', true);
        //     // let fromID = mapBy(checkedModels,'id');
        //     console.log(checkedModels);
        //   },
        //   checkAll: function(model){
        //     var model = this.get('model');
        //     model.setEach('isCheck',true);
        // },
    // }
});
