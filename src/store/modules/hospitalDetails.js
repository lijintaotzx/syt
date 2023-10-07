import {defineStore} from "pinia";
import {reqHospitalDepartment, reqHospitalDetail} from "@/api/hospital/index.js";

const useDetailStore = defineStore('Detail', {
    state: () => {
        return {
            hospitalInfo: {},
            hospitalDepartment: []
        }
    },
    actions: {
        async getHospital(hoscode) {
            let result = await reqHospitalDetail(hoscode)
            if (result.code === 200) {
                this.hospitalInfo = result.data
            }
        },
        async getHospitalDepartment(hoscode) {
            let result = await reqHospitalDepartment(hoscode)
            if (result.code === 200) {
                this.hospitalDepartment = result.data
            }
        }
    },
    getters: {},
});

export default useDetailStore;