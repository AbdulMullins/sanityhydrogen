export default {
    name: 'uahome',
    type: 'document',
      title: 'UnderArmour',
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text'
      },
   
      {
        title: 'BannerLink',
        name: 'bannerhref',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
      },
     
      {
        title: 'ButtonText',
        name: 'buttontext',
        type: 'text'
      },
    ]
  }