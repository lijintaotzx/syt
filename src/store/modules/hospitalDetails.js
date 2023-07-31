import {defineStore} from "pinia";
import {reqHospitalDetail} from "@/api/hospital/index.js";

const useDetailStore = defineStore('Detail', {
    state: () => {
        return {
            hospitalInfo: {}
        }
    },
    actions: {
        async getHospital(hoscode) {
            let result = await reqHospitalDetail(hoscode)
            console.log(result)
            if (result.code === 200) {
                this.hospitalInfo = result.data
            }

        }
    },
    getters: {},
});

export default useDetailStore;