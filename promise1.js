var p=new Promise((resolve,reject)=>{
    var num=Math.random();
    if(num<0.5){
        resolve(num);
    }
    else{
        reject(num);
    }
});
p.then(function(result){
    console.log("success:",result);}).catch(function(error){
        console.log("error:",error);
    });