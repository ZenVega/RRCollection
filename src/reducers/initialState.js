export const initialCollectionState = {
  records: {
    '199a71bf-cc4a-4bde-9ec2-9fb81d10fed5': {
      title:"Quebec",
      artistID: 1,
      labelID: 3,
      year: 2005,
      size: 'LP',
      cover_image: 'https://img.discogs.com/ozpNGs24Lgfj4gCTt74NZfcX1Po=/fit-in/600x590/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1690692-1506971761-7920.jpeg.jpg'
    },
    '199a71bf-cc4a-4bde-9ec2-9fb81d10fedg': {
      title:"Demo",
      artistID: 2,
      labelID: 1,
      year: 2016,
      size: 'LP',
      cover_image: 'https://f4.bcbits.com/img/a1419618004_10.jpg'
    },
    '199a71bf-cc4a-4bde-9ec2-9fb81df0fed5': {
      title:"Lachleute Nettmenschen",
      artistID: 4,
      labelID: 4,
      year: 1992,
      size: 'LP',
      cover_image: './norecord.png'
    },
    '199a71bf-cc4a-4bde-9ec2-9fb8ft10fed5': {
      title:"onyx",
      artistID: 3,
      labelID: 2,
      year: 2019,
      size: 'LP',
      cover_image: 'https://img.discogs.com/cf9qM3urGRungckDePkHhyR8fu0=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14513163-1576077255-1932.jpeg.jpg'
    },
    '199a71bf-cc4a-4bde-9ec2-9fb8ftdffed5': {
      title:"ZOO",
      artistID: 5,
      labelID: 5,
      year: 2019,
      size: 'LP',
      cover_image: 'https://img.discogs.com/-pu1ksiCrJJsU_cJ06FwVpdzNCY=/fit-in/540x540/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3322775-1325859408.jpeg.jpg'
    },
    recordIDs: ['199a71bf-cc4a-4bde-9ec2-9fb81d10fed5', '199a71bf-cc4a-4bde-9ec2-9fb81d10fedg', '199a71bf-cc4a-4bde-9ec2-9fb81df0fed5', '199a71bf-cc4a-4bde-9ec2-9fb8ft10fed5', '199a71bf-cc4a-4bde-9ec2-9fb8ftdffed5']
  },
  artists: {
    1:{
      name: "Ween",
    },
    2:{
      name: "AUS",
    },  
    3:{
      name: "VUG",
    },
    4:{
      name: "S.Y.P.H.",
    },
    5:{
      name: "Ceremony",
    },
    artistIDs: [1,2,3,4,5]
  },
  labels: {
    1: {
      name: "static shock",
    },
    2:{
      name: "noise solution",
    },
    3: {
      name: "weenRecs",
    },
    4: {
      name: "supi deutschpunk",
    },
    5: {
      name: "Matador",
    },
    labelIDs: [1,2,3,4,5]

  },

}

export const initialRecordState = {
  title: '',
  year: '',
  label: '',
  artist: '',
  size: 'LP',
  cover_image: './norecord.png'
}