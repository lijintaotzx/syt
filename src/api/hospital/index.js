import request from "@/utils/request.js";

// GET /api/cmn/dict/findByDictCode/{dictCode}
export const reqHospitalDetail = (hoscode) => request.get(
    '/hosp/hospital/' + hoscode
)

export const reqHospitalDepartment = (hoscode) => request.get(
    '/hosp/hospital/department/' + hoscode
)

export const getSmsCode = (phoneNum) => request.get(
    '/sms/send/' + phoneNum
)

export const userLogin = (data) => request.post(
    '/user/login', data
)

// 获取医院科室预约排班
export const getHospitalWork = (hoscode, depcode, page = 1, limit = 3) => request.get(
    `/hosp/hospital/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`
)


export const getDoctorList = (hoscode, depcode, workDate) => request.get(
    `/hosp/hospital/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`)


export const getUsers = () => request.get(
    '/user/patient/auth/findAll'
)
export const getDoctorInfo = (scheduleId) => request.get(
    `/hosp/hospital/getSchedule/${scheduleId}`
)

export const getUserInfo = () => request.get(
    '/user/auth/getUserInfo'
)