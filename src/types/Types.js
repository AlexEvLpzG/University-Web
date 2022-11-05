export const types = {
    // ! Acciones para el inicio de session
    login: '[auth] login',
    logout: '[auth] logout',
    loginFailed: '[auth] login failed',

    // ! Acciones para activar las alertas
    showAlert: '[alert] show alert',
    removeAlert: '[alert] remove alert',

    getInformationUser: '[user] get information User',
    getInformationUserFailed: '[user] get information User failed',

    getAllProdessor: '[professor] getAllProdessor',
    getAllProdessorFailed: '[products] getAllProdessor failed',

    getAllStudent: '[student] getAllStudent',
    getAllStudentFailed: '[student] getAllStudent failed',

    // ! Acciones para el modal
    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    addGlobalMessage: '[messages] add global message',
}
