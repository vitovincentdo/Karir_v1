import Controller from '@ember/controller';

export default Controller.extend({
    jobDescription: '',
    jobQualification: '',
    Newname:'',
    flagFeatured:false,
    newImgJob:'',
    NewSpecial:'',
    NewLocation:'',
    defaultURL: 'https://www.kalibrr.com/c/bank-central-asia-1/jobs',
    ownOptions:{
        branding: false,
        plugins: 'code print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools colorpicker textpattern help',
        toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat',
        image_advtab: true,
        height: 400,
        // menu: {
        //     file: {title: 'File', items: 'newdocument | preview'},
        //     edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
        //     insert: {title: 'Insert', items: 'link media | template hr'},
        //     view: {title: 'View', items: 'visualaid'},
        //     format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
        //     table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
        //     tools: {title: 'Tools', items: 'spellchecker code'}
        //   }
        // // plugins: "preview",
        // toolbar: 'fontselect fontsizeselect blockselect',
        // font_formats: 'Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats',
        // fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px'
    },
    jobImageOptions:{
        plugins:'paste code',
        branding:false,
        menubar: false,
        toolbar: false,
        paste_data_images: true,
        image_advtab: true,
        height: 200,
    },
    actions:{
        // myOnChangedAction(value){
        //     let isi = this.set('text', value);
        //     console.log(isi)
        // },
        valueChanged(value){
            this.set('flagFeatured', value);
        },
        saveJob(){
            const name = this.get('Newname');
            const specialization = this.get('NewSpecial');
            const location = this.get('NewLocation');
            const description = this.get('jobDescription');
            const qualification = this.get('jobQualification');
            const thumbJob = this.get('newImgJob');
            const featured = this.get('flagFeatured');
            const url = this.get('defaultURL');

            const newJob = this.get('store').createRecord('job',{
                name: name,
                specialization: specialization,
                location: location,
                description: description,
                qualification: qualification,
                thumbJob:thumbJob,
                featured:featured,
                url: url
            })
            // newArticle.save().catch(() => {});
            newJob.save();

            this.set('Newname', '');
            this.set('NewSpecial', '');
            this.set('NewLocation', '');
            this.set('Newname', '');
            this.set('jobDescription', '');
            this.set('jobQualification', '');
            this.set('newImgJob', '');
            this.set('flagFeatured', '');
        }
    }
});
