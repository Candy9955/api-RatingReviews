let a = [
  {
    rating: 2,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 4,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 5,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 4,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 3,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 4,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 1,
    recommend: false,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 2,
    recommend: true,
    name: 'Quality',
    value: '3',
    char_id: 294320
  },
  {
    rating: 4,
    recommend: true,
    name: 'Quality',
    value: '3',
    char_id: 294320
  },
  {
    rating: 5,
    recommend: true,
    name: 'Size',
    value: '3',
    char_id: 294320
  }
]

let x = a.reduce((res, x) => {
  res[x.name] = {
    id: x.char_id, value: res[x.name] ? Number(res[x.name].value) + Number(x.value) : Number(x.value),
    cnt: res[x.name] ? res[x.name].cnt + 1 : 1
  }
  return res;
}, {})

for (let key in x) {
  x[key].value = (x[key].value / x[key].cnt).toFixed(4)
  delete x[key].cnt
}


console.log(x)


// CREATE SEQUENCE reviews_id_seq OWNED BY reviews.id;
// SELECT setval('reviews_id_seq', coalesce(max(id), 0) + 1, false) FROM reviews;
// ALTER TABLE reviews ALTER COLUMN id SET DEFAULT nextval('reviews_id_seq');

// CREATE SEQUENCE photos_id_seq OWNED BY photos.id;
// SELECT setval('photos_id_seq', coalesce(max(id), 0) + 1, false) FROM photos;
// ALTER TABLE photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq');

// CREATE SEQUENCE characteristics_review_id_seq OWNED BY characteristics_review.id;
// SELECT setval('characteristics_review_id_seq', coalesce(max(id), 0) + 1, false) FROM characteristics_review;
// ALTER TABLE characteristics_review ALTER COLUMN id SET DEFAULT nextval('characteristics_review_id_seq');


//data:
// count: 500
// page: 1
// product: 66642
// results: Array(10)
// 0: {review_id: 384422, rating: 5, summary: 'Quis rerum explicabo velit doloremque debitis sint.', recommend: true, response: 'Facilis ut itaque qui quam et sapiente in.', …}
// 1: {review_id: 384429, rating: 5, summary: 'Quidem autem itaque eum voluptatem harum fuga.', recommend: true, response: 'Doloremque quia corrupti voluptatem amet.', …}
// 2: {review_id: 384430, rating: 5, summary: 'Voluptate sapiente quos reprehenderit ipsam cumque aperiam quos sit.', recommend: true, response: 'null', …}
// 3: {review_id: 384424, rating: 2, summary: 'Odio libero debitis quis minus sit molestiae et est iure.', recommend: true, response: 'null', …}
// 4: {review_id: 384423, rating: 2, summary: 'Voluptatem et natus saepe natus praesentium.', recommend: true, response: 'Nam dolor earum consequatur ut nostrum quisquam.', …}
// 5: {review_id: 384427, rating: 1, summary: 'Omnis aut provident.', recommend: false, response: 'null', …}
// 6: {review_id: 384425, rating: 5, summary: 'Voluptas eum corporis blanditiis odio inventore amet consequatur.', recommend: true, response: 'null', …}
// 7: {review_id: 384428, rating: 3, summary: 'Sequi nostrum explicabo esse.', recommend: true, response: 'null', …}
// 8: {review_id: 384431, rating: 2, summary: 'Nobis eaque et.', recommend: true, response: 'null', …}
// 9: {review_id: 384432, rating: 4, summary: 'Aspernatur distinctio modi cum blanditiis velit.', recommend: true, response: 'null', …}
// length: 10