const API='http://10.0.2.2:8000/api/categoryy'
export const getTask=async()=>{ 

const res = await fetch(API)
console.log(data)
return await res.json()
}