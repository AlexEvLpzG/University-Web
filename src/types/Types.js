export const types = {
    // ! Acciones para el inicio de session
    login: '[auth] login',
    logout: '[auth] logout',
    loginFailed: '[auth] login failed',

    // ! Acciones para activar las alertas
    showAlert: '[alert] show alert',
    removeAlert: '[alert] remove alert',

    // ! Acciones para los productos
    getInformationUser: '[user] get information User',
    getInformationUserFailed: '[user] get information User failed',

    // ! Acciones buscar un producto por el ID
    getKardexById: '[products] get KardexBy Id',
    getKardexByIdFailed: '[products] get KardexBy Id failed',

    // ! Acciones para el modal
    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    addGlobalMessage: '[messages] add global message',
}
