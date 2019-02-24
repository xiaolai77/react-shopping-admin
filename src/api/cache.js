let len = 0;
let obj = new Object();
const HashMap = {
    containsKey(key) {
        return (key in obj);
    },
    put(key, value) {
        if (!this.containsKey(key)) {
            len++;
        }
        obj[key] = value;
    },
    get(key) {
        return this.containsKey(key) ? obj[key] : null;
    },
    remove(key){  
        if(this.containsKey(key)&&(delete obj[key])){  
            len--;  
        }  
    } 
}
const cache = {   
     key(url,params){
        let str=url+"?";
        if(params){
            if(typeof(params)!="object"){
                params=JSON.parse(params);
            }
                for(var k in params){
                    str+=params[k];
              }
             
        }
        return str;
     },
     isCache(url,param){
        let key=this.key(url,param);
        let isData = HashMap.get(key);
        return new Promise(function(relove){
            if(isData){
                relove(isData);
           }else{
               relove(false);
           }
        }) 
     },
     startCache(url,param,data){ 
        let key=this.key(url,param);
        let isData = HashMap.get(key);
        if(isData){
            HashMap.remove(key); 
        }
           HashMap.put(key,data);
     }
}
export {
    HashMap,
    cache
}