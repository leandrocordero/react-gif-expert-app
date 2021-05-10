import React, { useState } from 'react'
import { AddCategorie } from './components/AddCategorie'
import { GiftGrid } from './components/GiftGrid'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])

    
    return (
        <>
        <h1>GifExpertApp</h1>
        <AddCategorie setCategories={ setCategories } />
       <hr />  
               
        <ol>
        {
            categories.map(categorie=>(

                        <GiftGrid
                        key= { categorie }
                        category= { categorie }
                        />

            ))

        }
        </ol>
        </>
    )
}
