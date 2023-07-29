// 统一管理首页模块接口
import request from "@/utils/request.js";

// enum API {
//     // 获取已有医院的数据
//     HOSPITAL_URL = "/hosp/hospital/",
// }

export const reqHospital = (page, limit, hostype = '', districtCode = '') => request.get(
    '/hosp/hospital/' + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
);
export const reqHospitalLevelOrRegin = (dictCode) => request.get(
    '/cmn/dict/findByDictCode/' + dictCode
);
// GET /api
export const reqHospitalsByName = (hosname) => request.get(
    '/hosp/hospital/findByHosname/' + hosname
)
