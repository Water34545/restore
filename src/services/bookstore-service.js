export default class BooksStoreService {

    data = [
        {
            id: 1, 
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg'
        },
        {
            id: 2, 
            title: 'Relise It!',
            author: 'Michsel T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51609YUH2mL._SX379_BO1,204,203,200_.jpg'
        },
    ]

    getBooks() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(this.data)
                //reject(new Error('Something wrong!'))
            }, 700)
        })
    }
}