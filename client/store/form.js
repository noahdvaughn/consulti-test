import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
    name: '',
    email: '',
    message: ''
})

export const mutations = {
    updateField
}
export const getters = {
    getField,
}