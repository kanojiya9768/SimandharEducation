export const API_BASE_URL = "https://simapi.simandhareducation.com/";
export const FRONTEND_BASE_URL = process.env.NEXT_PUBLIC_ENV === 'local' ? 'http://localhost:3000/' : "https://dev.simandhareducation.com/";
export const DATABASE_URL = "https://simapi.simandhareducation.com/posts/"
export const FORM_URL = "https://simapi.simandhareducation.com/"



export const urlConstants = {
    signUp: API_BASE_URL + "userAuth/auth/studentRegister",
    signIn: API_BASE_URL + "userAuth/auth/studentSignIn",
    forgotPassword: API_BASE_URL + "userAuth/auth/forgotPassword",
    resetPassword: API_BASE_URL + "userAuth/auth/resetPassword",
    studentProfile: API_BASE_URL + "userAuth/studentProfile",
    changePassword: API_BASE_URL + "userAuth/auth/updatePassword",
    updateProfile: API_BASE_URL + "userAuth/updateStudentProfile",

    getCourseList: API_BASE_URL + "alphalearn/getCourseList",
    getOrderHistory: API_BASE_URL + "cart/getOrderHistory",
    downloadInvoice: API_BASE_URL + "cart/downloadInvoice",

    getCart: API_BASE_URL + "cart/getCart",
    addToCart: API_BASE_URL + "cart/addToCart",
    removeFromCart: API_BASE_URL + "cart/removeFromCart",
    generateInvoice : API_BASE_URL + "cart/generateInvoice",

    getCourseDetails: API_BASE_URL + "lms/getCourseDetails",

    verifyPayment: API_BASE_URL + "cart/verifyPayment",
    checkout: API_BASE_URL + "cart/checkout",

    getSimilarCourses: API_BASE_URL + "lms/getAllCourses",
    getAllCourses: API_BASE_URL + "lms/getAllCourses",

    getOrderDetails: API_BASE_URL + "cart/getOrder",
    saveBillingAddress: API_BASE_URL + "cart/saveBillingAddress",
    careerForm: FORM_URL + "lms/careerForm",
    commonForm: FORM_URL + "crm/getInTouch",

    achiverSection: DATABASE_URL + "getAchieversSection",
    contentSection: DATABASE_URL + "getContentSection",
    onlineCourseCPA: DATABASE_URL + "getOnlineCourse",
    heroBanner: DATABASE_URL + "getBanner",
    juorneySection: DATABASE_URL + "getJourneySection",
    curriculumSection: DATABASE_URL + "getCurriculumData",
    curriculumSectionOne: DATABASE_URL + "getCurriculumsectionOne",
    helpSection: DATABASE_URL + "getHelpSection",
    indexData: DATABASE_URL + "getIndex",
    videoSection: DATABASE_URL + "getVideoSection",
    examSection: DATABASE_URL + "getExam",
    gallerySection: DATABASE_URL + "getGallerySection",
    corporateLogos: DATABASE_URL + "getCorporateLogos",
    corporateData: DATABASE_URL + "getCorporateData",
    testimonialVideoTab: DATABASE_URL + "getTestimonialVideoTab",
    getCareerData: DATABASE_URL + "getCareerPage",
    getSripalData: DATABASE_URL + "getSripalJain",
    getAlumniPage: DATABASE_URL + "getAlumniPage",


}

export const coupons = ['simandhar', 'simandhar20', 'simandhar30'];

// If USER is Logged in then, he should not be able to go to these pages.
export const ifLoggedInRestrictedPaths = ['/login', '/signup', '/newpassword'];

// If USER is NOT Logged in then, he should not be able to go to these pages.
export const ifNotLoggedInRestrictedPaths = ['/orderSuccessScreen', '/paymentFailure', '/security', '/profile', '/myCourse', '/orderHistory', '/logout'];