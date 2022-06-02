const express = require('express')

const app = express()
app.use(express.json)
app.use(express.urlencoded({extended:true}))

const data=[
    {name:'Iphone 6',price:'200',id:1},
    {name:'Iphone 7',price:'300',id:2},
    {name:'Iphone 8',price:'400',id:3},
    {name:'Iphone 10',price:'500',id:4},
    {name:'Iphone 11',price:'600',id:5},
    {name:'Iphone 12',price:'700',id:6},
]

//devolver productos
app.get('/api/productos',(req,res)=>{res.json(data)})


//devolver producto segun su id que la recibo en la url
app.get('/api/productos/:id',(req,res)=>{
    const id = req.params.id
    res.json(data.find(d=>d.id==id))
})
//agregar producto
app.post('/api/productos',(req,res)=>{
    data.push(req.body)
   res.json(data)
})

//borrar producto
app.delete('/api/productos/:id',(req,res)=>{
    const id = number(req.params.id)
    const idx = data.findIndex(d=>d.id==id)
    data.splice(idx,1)
    res.send('eliminado con exito')
})










const server = app.listen(8086,()=>{
    console.log('server listening...')
})

