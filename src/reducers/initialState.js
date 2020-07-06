export const initialCollectionState = {
  records: [
    {
      id: '199a71bf-cc4a-4bde-9ec2-9fb81d10fed5',
      title:"Quebec",
      artistID: 1,
      labelID: 3,
      year: 2005,
      size: 'LP',
      cover_image: 'https://img.discogs.com/ozpNGs24Lgfj4gCTt74NZfcX1Po=/fit-in/600x590/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1690692-1506971761-7920.jpeg.jpg'
    },
    {
      id: '199a71bf-cc4a-4bde-9ec2-9fb81d10fedg',
      title:"Demo",
      artistID: 2,
      labelID: 1,
      year: 2016,
      size: 'LP',
      cover_image: 'https://f4.bcbits.com/img/a1419618004_10.jpg'
    },
    {
      id: '199a71bf-cc4a-4bde-9ec2-9fb81df0fed5',
      title:"Lachleute Nettmenschen",
      artistID: 4,
      labelID: 4,
      year: 1992,
      size: 'LP',
      cover_image: './norecord.png'
    },
    {
      id: '199a71bf-cc4a-4bde-9ec2-9fb8ft10fed5',
      title:"onyx",
      artistID: 3,
      labelID: 2,
      year: 2019,
      size: 'LP',
      cover_image: 'https://img.discogs.com/cf9qM3urGRungckDePkHhyR8fu0=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14513163-1576077255-1932.jpeg.jpg'
    },
  ],
  artists: [
    {
      name: "Ween",
      artistID: 1
    },
    {
      name: "AUS",
      artistID: 2
    },  
    {
      name: "S.Y.P.H.",
      artistID: 4
    },
    {
      name: "VUG",
      artistID: 3
    }],
  labels: [
    {
      name: "static shock",
      labelID: 1
    },
    {
      name: "noise solution",
      labelID: 2
    },
    {
      name: "weenRecs",
      labelID: 3
    },
    {
      name: "supi deutschpunk",
      labelID: 4
    }

  ],

}

export const initialRecordState = {
  title: '',
  year: '',
  label: '',
  artist: '',
  size: 'LP',
  cover_image: './norecord.png'
}