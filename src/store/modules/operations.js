import {
  GETITEMSACTION,
  CREATEITEMACTION,
  UPDATEITEMACTION,
  DELETEITEMACTION,
  GETSINGLEITEMTOEDITACTION,
  GETITEMSMUTATION,
  CREATEITEMMUTATION,
  UPDATEITEMMUTATION,
  DELETEITEMMUTATION,
  GETSINGLEITEMTOEDITMUTATION,
  ASSIGNTICKET
} from '../constants'
import router from '@/router'
import database from '@/db'
const state = {
  items: []
}
const mutations = {
  [GETITEMSMUTATION] (state, payload) {
    state.items = payload
  },
  [CREATEITEMMUTATION] (state, payload) {
    state.items.push(payload)
  },
  [DELETEITEMMUTATION] (state, payload) {
    state.items.splice(
      state.items.indexOf(state.items.filter(item => item.id === payload)[0]),
      1
    )
  }
}
const actions = {
  [GETITEMSACTION] ({ commit }, payload) {
    let all_items = []
    database.db
      .collection(payload)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let obj = doc.data()
          obj.id = doc.id
          all_items.push(obj)
        })
        return all_items
      })
      .then(items => {
        commit(GETITEMSMUTATION, items)
      })
  },
  [CREATEITEMACTION] ({ commit }, payload) {
    database.db
      .collection(payload.collection)
      .add(payload.item)
      .then(docRef => {
        console.log('user added: ', docRef.id)
      })
      .then(() => {
        router.go(-1)
      })
      .catch(error => {
        console.error('Error creating data: ', error)
      })
  },
  [GETSINGLEITEMTOEDITACTION] ({ commit }, payload) {
    return database.db
      .collection(payload.collection)
      .doc(payload.id)
      .get()
      .then(snapshot => {
        if (!snapshot.exists) return
        let data = snapshot.data() //
        return data
        // continue your code
      })
  },
  [UPDATEITEMACTION] ({ commit }, payload) {
    console.log(payload)
    database.db
      .collection(payload.collection)
      .doc(payload.id)
      .update(payload.item)
      .then(() => {
        router.go(-1)
        console.log('Data successfully updated!')
      })
      .catch(error => {
        console.log(error)
      })
  },
  [DELETEITEMACTION] ({ commit }, payload) {
    database.db
      .collection(payload.collection)
      .doc(payload.id)
      .delete()
      .then(() => {
        commit(DELETEITEMMUTATION, payload.id)
      })
      .catch(function (error) {
        console.error('Error removing document: ', error)
      })
  },
  [ASSIGNTICKET] ({ commit }, payload) {
    return database.db
      .collection(payload.collection)
      .doc(payload.id)
      .update({
        assignedTo: payload.user
      })
      .then(updatedData => {
        return updatedData
      })
      .catch(function (error) {
        return error
      })
  }
}
const getters = {
  ITEMS (state) {
    return state.items
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
