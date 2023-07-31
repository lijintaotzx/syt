import request from "@/utils/request.js";

// GET /api/cmn/dict/findByDictCode/{dictCode}
export const reqHospitalDetail = (hoscode) => request.get(
    '/hosp/hospital/' + hoscode
)