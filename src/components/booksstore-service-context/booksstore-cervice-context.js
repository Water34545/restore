import React from 'react'

const  {
    Provider: BooksstoreServiceProvider,
    Consumer: BooksstoreServiceConsumer
} = React.createContext()

export {
    BooksstoreServiceConsumer,
    BooksstoreServiceProvider
}