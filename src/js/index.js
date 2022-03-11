//FIREBASE
import {ref as dbRef, get} from "firebase/database";
import {ref as storageRef, getDownloadURL} from "firebase/storage";
import {db, storage } from './libs/firebase/firebaseconfig';
import {productCard} from './template/productCard'

async function productDataInit()
{
    //firebase realtime db
    const productRef = dbRef(db, "product/")
    const productSnapshot = await get(productRef) 
    const productData = productSnapshot.val();

    //firebase storage

    //product card
    const productCards = Object.values(productData).map(product =>{
        const card = productCard(product)
        document.body.append(card)

        return card
    })
}

productDataInit()