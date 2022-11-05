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

    // ! Acciones buscar un producto por el ID
    searchProductById: '[products] search product by id',
    searchProductByIdFailed: '[products] search product by id failed',

    // ! Acciones para el modal
    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    addGlobalMessage: '[messages] add global message',
}
