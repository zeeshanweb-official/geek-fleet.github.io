import {
  LOGINACTION,
  LOGINSUCCESS,
  LOGINUNSUCCESS,
  ALREADYLOGGEDINFROMSESSIONS,
  REGISTERUSERACTION,
  GETUSERSACTION,
  GETUSERSMUTATION,
  DELETEUSERACTION,
  DELETEUSERMUTATION,
  GETSINGLEUSERACTION,
  UPDATEAUSERACTION
} from '../constants'
import router from '@/router'
import firebase from 'firebase'
import database from '@/db'
const state = {
  user: {},
  login: false,
  users: []
}
const mutations = {
  [LOGINSUCCESS] (state, payload) {
    state.login = true
    state.user = payload
  },
  [LOGINUNSUCCESS] (state, payload) {
    console.log('got erhe')
    ;(state.login = false), (state.error = payload)
  },
  [GETUSERSMUTATION] (state, payload) {
    state.users = payload
  },
  [DELETEUSERMUTATION] (state, payload) {
    state.users.splice(
      state.users.indexOf(state.users.filter(item => item.id === payload)[0]),
      1
    )
  }
}
const actions = {
  [LOGINACTION] ({ commit }, payload) {
    //   .createUserWithEmailAndPassword(payload.email, payload.password)
    return firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        console.log(user)
        commit(LOGINSUCCESS, user)
        router.push('/dashboard')
        return user
      })
      .catch(error => {
        console.log(error)
        commit(LOGINUNSUCCESS, error)
        return error
      })
  },
  [ALREADYLOGGEDINFROMSESSIONS] ({ commit }, payload) {
    commit(LOGINSUCCESS, payload)
  },
  [REGISTERUSERACTION] ({ commit }, payload) {
    if (payload.email && payload.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          console.log(user)
          database.db
            .collection('user')
            .add({
              name: payload.name,
              phone: payload.phone,
              address: payload.address,
              active: false
            })
            .then(docRef => {
              console.log('user added: ', docRef.id)
              router.push('/userlist')
            })
            .catch(error => {
              console.error('Error adding user: ', error)
            })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  [GETUSERSACTION] ({ commit }) {
    database.db
      .collection('user')
      .get()
      .then(querySnapshot => {
        let allUsers = []
        querySnapshot.forEach(doc => {
          let obj = {
            id: doc.id,
            name: doc.data().name,
            phone: doc.data().phone,
            address: doc.data().address
          }
          allUsers.push(obj)
        })
        return allUsers
      })
      .then(users => {
        commit(GETUSERSMUTATION, users)
      })
  },
  [DELETEUSERACTION] ({ commit }, payload) {
    database.db
      .collection('user')
      .doc(payload)
      .delete()
      .then(() => {
        commit(DELETEUSERMUTATION, payload)
      })
      .catch(function (error) {
        console.error('Error removing document: ', error)
      })
  },
  [GETSINGLEUSERACTION] ({ commit }, payload) {
    return database.db
      .collection('user')
      .doc(payload)
      .get()
      .then(snapshot => {
        if (!snapshot.exists) return
        let data = snapshot.data() //
        return data
        // continue your code
      })
  },
  [UPDATEAUSERACTION] ({ commit }, payload) {
    database.db
      .collection('user')
      .doc(payload.id)
      .update(payload.user)
      .then(() => {
        console.log('User successfully updated!')
      })
      .catch(error => {
        console.log(error)
      })
  }
}
const getters = {
  LOGIN (state) {
    return state.login
  },
  USER (state) {
    return state.user
  },
  USERS (state) {
    return state.users
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
