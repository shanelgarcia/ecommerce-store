//FIREBASE
import {ref as dbRef, get} from "firebase/database";
import {ref as storageRef, getDownloadURL} from "firebase/storage";
import {db, storage } from './libs/firebase/firebaseconfig';

import {productCard} from './template/productCard'
import {pageHeader} from './template/header'

async function productDataInit()
{
    const logoSrc = "https://firebasestorage.googleapis.com/v0/b/ecommerce-store-49b44.appspot.com/o/assets%2Fsunny-coastal-village-logo.png?alt=media&token=fce10f24-ad9f-48bc-b824-4bd99f839008";
    const header = pageHeader(logoSrc)
    document.body.append(header)
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