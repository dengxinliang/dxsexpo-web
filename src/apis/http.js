import axios from 'axios';

const netWork = (()=>{
    const update = (obj) => {
        const  instance = axios.create({
            baseURL: '/',
            timeout: 20000,
            withCredentials: true
        });
        instance.interceptors.request.use((request)=>{
            // 在发送请求之前做些什么
            // request.headers['Authorization'] = localStorage.getItem('token');
            return request;
        }, (error) => {
            // 对请求错误做些什么
            console.log(error)
        });
        instance.interceptors.response.use(function (response) {
            return response;
          }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
          });
        return instance;
    };
    return{
        post: async (url,data,obj)=>{
            try{
                const res = await update(obj).post(url,data);
                if(!res.data.success){
                    return res.data
                }else{
                    return res.data
                }
            }catch(error) {
                console.log(error);
            };
        },
        get: async (url,params,obj)=>{
            try{
                const res = await update(obj).get(url,{params});
                if(!res.data.success){
                    return res.data
                }else{
                    return res.data
                }
            }catch(error) {
                console.log(error);
            };
        }
    } 
})();

export default netWork;