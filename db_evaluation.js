
app.get("/traveler",(req,res)=>{
    let sql=`select * from travelers where name="${req.body.name}"`
    con.query(sql,(err,result)=>{
        if(err){
            res.status(404);
            res.json({err,});
            return;
        }
        res.status(200);
        const res_result={...result[0],destinationsVisited:result.length};
        res.json({res_result})
    })
});

app.get("/allcountries",(req,res)=>{
    let sql="select * from countries"
    con.query(sql,(err,result)=>{
        if (err){
            res.status(404);
            res.json({err,});
            return;
        }
        res.status(200);
        res.json(result)
    })
});

app.get("/cities",(req,res)=>{
    let sql=`select countries.name,cities.name from countries join cities ON (countries.name="${req.body.name}" && countries.country_id=cities.country_id);`
    con.query(sql,(err,result)=>{
        if(err){
            res.status(404);
            res.json({err,});
            return;
        }
        res.status(200);
        // const res_result={...result[0],destinationsVisited:result.length};
        res.json({countryName:req.body.name,result:result})
    })
});

app.post("/insert",(req,res)=>{
    let sql=`insert into travelers values ("${req.body.t_id}","${req.body.name}","${req.body.arrived_date}","${req.body.destination_id}")`
    con.query(sql,(err,result)=>{
        if(err){
            res.status(404);
            res.json({err,});
            return;
        }
        res.status(200);
        res.json({message:"data submiittes succesfuly"})
    })
})