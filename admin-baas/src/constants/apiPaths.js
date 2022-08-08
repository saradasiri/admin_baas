const  API_PATHS = {
    OTP : "https://backend.paymentplanet.co/users/send-otp",
    USER_REGISTER : "https://backend.paymentplanet.co/users/register",
    USER_LOGIN : `https://backend.paymentplanet.co/users/login`,
    FORGOT_PASSWORD : `https://backend.paymentplanet.co/users/sendForgotPasswordEmail`,
    RESET_PASSWORD : `https://backend.paymentplanet.co/users/changePassword`,
    GET_DETAILS : `https://backend.paymentplanet.co/users/get_userDetails`,
    KYC_REGISTER : `https://backend.paymentplanet.co/users/kyc`,
    APPLY_FOR_CARD : `https://backend.paymentplanet.co/users/applyForCard`,
    UPDATE_OTP : `https://backend.paymentplanet.co/users/sendupdateprofile_OTP`,
    UPDATE_EMAIL  :`https://backend.paymentplanet.co/users/update-email`,
    UPDATE_MOBILE : `https://backend.paymentplanet.co/users/update-mobile`,
    UPDATE_PASSWORD : `https://backend.paymentplanet.co/users/update-password`,
    UPDATE_WALLET_PIN : `https://backend.paymentplanet.co/users/update-wallet-pin`,
    UPDATE_PROFILE_PIC: `https://backend.paymentplanet.co/users/update-profile-pic`,
    JDB_APPLY : `https://backend.paymentplanet.co/users/applyForCard`,
    NIUM_APPLICATION_SUBMIT : `https://backend.paymentplanet.co/users/applyForNuimCard`
}

export default API_PATHS