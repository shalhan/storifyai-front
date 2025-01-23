import { defineStore } from 'pinia'
import { collection, addDoc } from 'firebase/firestore'
import { Timestamp } from 'firebase/firestore'

export const useAnalyticStore = defineStore('analytic', {
    actions: {
        getDb() {
            return useFirestore()
        },
        async trackViewers(analyticId) {
            const footprint = localStorage.getItem(`view:storifyai-footprint-${analyticId}`)
            if (footprint == undefined) {
                const col = collection(this.getDb(), 'analytics', analyticId, 'data')
                const ipData  = await $fetch('https://api.ipify.org?format=json')
                const geolocationData  = await $fetch(`https://ipinfo.io/${ipData.ip}?token=7165e822eba606`)
                const newDoc = await addDoc(col, { timestamp: Timestamp.now(), userAgent: navigator.userAgent, ...geolocationData })
                localStorage.setItem(`view:storifyai-footprint-${analyticId}`, newDoc.id)
            }
        },
        async event(analyticId) {
            const footprint = localStorage.getItem(`event:storifyai-footprint-${analyticId}`)
            if (footprint == undefined) {
                const col = collection(this.getDb(), 'analytics', analyticId, 'data')
                const ipData  = await $fetch('https://api.ipify.org?format=json')
                const newDoc = await addDoc(col, { timestamp: Timestamp.now(), userAgent: navigator.userAgent, ip: ipData.ip })
                localStorage.setItem(`event:storifyai-footprint-${analyticId}`, newDoc.id)
            }
        }
    },
        

})