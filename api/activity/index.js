import config from "../../utils/conf/config.js";
import {request} from "../../utils/request/request.js";


//显示所有新闻
export function getActivityList(data){
    return request(config.baseApi+"/activity/list","get",data)
}
