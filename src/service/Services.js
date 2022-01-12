import axios from 'axios'


class Services{

async getAllItems(){
    return await axios.get("http://localhost:9090/admin/getAllItems")
}
async editItem(item){
    return await axios.post("http://localhost:9090/admin/editItem",
    item,{headers:{'Content-Type':'application/json'}}
    )
}
async addItem(item){
    return await axios.put("http://localhost:9090/admin/addItem",
    item,{headers:{'Content-Type':'application/json'}}
    )
}
async deleteItem(id){
    return await axios.delete("http://localhost:9090/admin/deleteItem",
     {params :{id}},{headers:{'Content-Type':'application/json'}})
    }
}
export default new Services();