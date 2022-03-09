//FIREBASE
import {ref, get} from "firebase/database";
import {db} from './libs/firebase/firebaseconfig';

async function productDataInit()
{
    //firebase
    const productRef = ref(db, "product/")
    const productSnapshot = await get(productRef) 
    const productData = productSnapshot.val();

    Object.keys(productData).map(key => {
        productData[key].id = key

        console.log(productData[key].title);

        return productData[key];
    })
}

productDataInit()