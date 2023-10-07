import request from "@/utils/request.js";

// GET /api/cmn/dict/findByDictCode/{dictCode}
export const postOrder = (hoscode, scheduleId, patientId) => request.post(
    `/order/orderInfo/auth/submitOrder/${hoscode}/${scheduleId}/${patientId}`
)
export const getOrderDetail = (id) => request.get(
    `/order/orderInfo/auth/getOrderInfo/${id}`
)
export const cancelOrder = (id) => request.get(
    `/order/orderInfo/auth/cancelOrder/${id}`
)
