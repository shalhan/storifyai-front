import { defineStore } from 'pinia'
import { collection, addDoc } from 'firebase/firestore'

export const useWaitingListStore = defineStore('waitingList', {
    actions: {
        getDb() {
            return useFirestore()
        },
        submit(email) {
          const col = collection(this.getDb(), 'waiting_list')
          return addDoc(col, { email: email })
        }
    },
        

})