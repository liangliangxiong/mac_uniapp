import config from "../../utils/conf/config.js";
import {request} from "../../utils/request/request.js";


//显示所有新闻
export function GetAllNews(data){
    return request(config.baseApi+"/GetAllNews","get",data)
}
