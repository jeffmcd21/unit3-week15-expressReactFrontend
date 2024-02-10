
import { redirect } from "react-router-dom"
const URL = process.env.REACT_APP_URL

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const updatePerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title")
    }
    console.log(updatePerson)
    await fetch(`${URL}/people/${params.id}`, {
        method: "put",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatePerson)
    })
    return redirect("/")
}

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const createPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title")
    }
    console.log(createPerson)
    await fetch(`${URL}/people/`, {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createPerson)
    })
    return redirect("/")
}


export const deleteAction = async ({params}) => {
    
    await fetch(`${URL}/people/${params.id}`, {
        method: "delete",
    })
    return redirect("/")
}