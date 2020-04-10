import React from 'react' 
import {BooksstoreServiceConsumer} from '../booksstore-service-context'

const withBooksstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BooksstoreServiceConsumer>
                {
                    (booksstoreService) => {
                        return ( 
                            <Wrapped {...props} 
                                booksstoreService={booksstoreService}/>
                        )
                    }
                }
            </BooksstoreServiceConsumer>
        )
    }
}

export default withBooksstoreService