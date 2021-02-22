const ROUTES = {
    HOME:'/',
    ABOUT:'/about',
    BLOG:'/blog',
    SIGNIN:'/login',
    SIGNOUT:'/logout',
    SIGNUP:'/register',
    CHANGE_PASSWORD:'/password_change',
    RESET_PASSWORD:'/password_reset',

    PLOT:'/plots',
    PLOT_INFO:'/plots/plot_id/',
    PLOT_CREATE:'/plots/create/',
    PLOT_UPDATE:'plots/update/:plot_id',
    PLOT_UPDATE:'plots/delete/:plot_id',

    PROPERTY:'/property',
    PROPERTY_INFO:'/property/:plot_id/:property_id/',
    PROPERTY_CREATE:'/property/:plot_id/',
    PROPERTY_UPDATE:'/property/update/:plot_id/property_id/',
    PROPERTY_DELETE:'/property/delete/:plot_id/property_id/',

    TENANTS:'/tenants',
    TENANTS_INFO:'/tenants/:plot_id/:tenant_id',
    TENANTS_CREATE:'/tenants/:plot_id/',
    TENANTS_UPDATE:'/tenants/update/:plot_id/:tenant_id',
    TENANTS_DELETE:'/tenants/delete/:plot_id/:tenant_id',

    RENT_PAYMENT:'/rent',
    RENT_PAYMENT_INFO:'rent/:rent_id',
    RENT_PAYMENT_CREATE:'rent/create/',
    RENT_PAYMENT_UPDATE:'rent/update/rent_id',
    RENT_PAYMENT_DELETE:'rent/delete/rent_id',
};

// protected routes
export const protectedLinks = [
    {title:'home', path:ROUTES.HOME},
    {title:'Plots', path:ROUTES.PLOT},
    {title:'property', path:ROUTES.PROPERTY},
    {title:'tenants', path:ROUTES.TENANTS},
    {title:'rent', path:ROUTES.RENT_PAYMENT},
    {title:'about', path:ROUTES.ABOUT},
];

// public routes
export const publicLinks = [
    {title:'home', path:ROUTES.HOME},
    {title:'Plots', path:ROUTES.PLOT},
    {title:'property', path:ROUTES.PROPERTY},
    {title:'about', path:ROUTES.ABOUT},
    {title:'login', path:ROUTES.SIGNIN},
];

export default ROUTES;

