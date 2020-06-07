
export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Production-Ready',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage:'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygarad',
            price: 65,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: '12 Rules for Life: An Antidote to Chaos ',
            author: 'Jordan B. Peterson',
            price: 50,
            coverImage: 'data:image/webp;base64,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'
        }
    ];
    getBooks () {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
                reject(new Error('Something bad happened!'));
            }, 700);
        });
    };
};