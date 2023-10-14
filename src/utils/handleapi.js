import axios from 'axios'

const baseurl = "https://full-stack-todo-app-backend-n4ju.onrender.com"

const getalltodo = (settodo) => {
    axios.get(baseurl)
    .then(({data}) => {
        console.log('data ---> ', data);
        settodo(data)
    })
}

const  addtodo = (text, settext, settodo) => {

    axios
    .post(`${baseurl}/save`,{text})
    .then((data)=>{
        console.log(data);
        settext("")
        getalltodo(settodo)
    })
    .catch((err)=> console.log(err))

}

export {getalltodo, addtodo}




const  updatetodo = (todoid, text, settodo, settext, setIsUpdating) => {

    axios
    .post(`${baseurl}/update`,{_id: todoid,text})
    .then((data)=>{
        settext("")
        setIsUpdating(false)
        getalltodo(settodo)
    })
    .catch((err)=> console.log(err))

}

export {updatetodo}

const  deletetodo = (_id, settodo) => {

    axios
    .post(`${baseurl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
       
        getalltodo(settodo)
    })
    .catch((err)=> console.log(err))
 
}

export {deletetodo}