export const initialCollectionState = {
  records: [
    {
      title:"Quebec",
      artistID: 1,
      labelID: 3,
      year: 2005,
      size: 12
    },
    {
      title:"Demo",
      artistID: 2,
      labelID: 1,
      year: 2016,
      size: 12,
      cover_img: 'https://f4.bcbits.com/img/a1419618004_10.jpg'
    },
    {
      title:"Chocolate & Cheese",
      artistID: 1,
      labelID: 3,
      year: 2000,
      size: 12
    },
    {
      title:"onyx",
      artistID: 3,
      labelID: 2,
      year: 2019,
      size: 12
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
    }

  ],

}

export const initialRecordState = {
  title: '',
  year: '',
  label: '',
  artist: '',
  size: '12'
}