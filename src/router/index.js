import Vue from 'vue'
import VueRouter from 'vue-router'
import Used from '../views/Used.vue'
import Demo from '../views/Demo.vue'
import Dealers from '../views/Dealers.vue'
import Finance from '../views/Finance.vue'
import Insurance from '../views/Insurance.vue'
import ContactUs from '../views/ContactUs.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsAndConditions from '../views/TermsAndConditions.vue'
import Articles from '../views/Articles.vue'
import ViewCar from '../views/ViewCar.vue'
import Usedcars from '../views/Usedcars.vue'
import Dealership from '../views/Dealership.vue'
import ThankYou from '../views/ThankYou.vue'
import ContactThankYou from '../views/ContactThankYou.vue'
import ArticlesPage from '../views/ArticlesPage.vue'
import DealerThankyou from '../views/DealerThankYou.vue'
import InsuranceThankYou from '../views/InsuranceThankYou.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Used',
        component: Used,
        meta: {
            gtmAdditionalEventData: { routeCategory: 'Home' },
            title: 'Used Cars Online | Second Hand Cars In South Africa | Second Hand Cars',
            metaTags: [{
                    name: 'description',
                    content: 'Buy Second Hand Cars online today through our online portal, Second Hand Cars South Africa provides a wide range of used vehicles.'
                },
                {
                    property: 'og:description',
                    content: 'Buy Second Hand Cars online today through our online portal, Second Hand Cars South Africa provides a wide range of used vehicles.'
                }
            ]
        },
    },
    {
        path: '/demo',
        name: 'Demo',
        component: Demo,
        meta: {
            title: 'Demo Cars For Sale | Second Hand Cars In South Africa | Second Hand Cars',
            metaTags: [{
                    name: 'description',
                    content: 'View our wide range of demo cars for sale at Second Hand Cars, all vehicles mileage under 2500km. Enquire Now'
                },
                {
                    property: 'og:description',
                    content: 'View our wide range of demo cars for sale at Second Hand Cars, all vehicles mileage under 2500km. Enquire Now'
                }
            ]
        },
    },
    {
        path: '/dealers',
        name: 'Dealers',
        component: Dealers,
        meta: {
            gtm: "Dealers",
            title: 'Used Car Dealerships | Second Hand Cars Dealers | Second Hand Cars',
            metaTags: [{
                    name: 'description',
                    content: 'Choose from our wide selection of used car dealerships on our Second Hand Cars portal. Enquire Today.'
                },
                {
                    property: 'og:description',
                    content: 'Choose from our wide selection of used car dealerships on our Second Hand Cars portal. Enquire Today.'
                }
            ]
        },
    },
    {
        path: '/finance-calculator',
        name: 'Finance',
        component: Finance,
        meta: {
            title: 'Car Finance Calculator | Second Hand Cars | Second Hand Cars',
            metaTags: [{
                    name: 'description',
                    content: 'Use our car finance calculator to estimate repayments on your used car at Second Hand Cars.'
                },
                {
                    property: 'og:description',
                    content: 'Use our car finance calculator to estimate repayments on your used car at Second Hand Cars.'
                }
            ]
        },
    },
    {
        path: '/insurance',
        name: 'Insurance',
        component: Insurance,
        meta: {
            gtm: "Insurance",
            title: 'Second Hand Cars Insurance Quotes | King Price Insurance | Second Hand Cars',
            metaTags: [{
                    name: 'description',
                    content: 'View our Second Hand Cars insurance quotes now, we are partnered with King Price Insurance. Get a mind-blowing car insurance quote.'
                },
                {
                    property: 'og:description',
                    content: 'View our Second Hand Cars insurance quotes now, we are partnered with King Price Insurance. Get a mind-blowing car insurance quote.'
                }
            ]
        },
    },
    {
        path: '/usedcars',
        name: 'Usedcars',
        component: Usedcars,
        meta: {
            title: 'Search Used Cars Online | Second Hand Cars',
        },
    },
    {
        path: '/dealership/:Dealer_Name',
        name: 'Dealership',
        component: Dealership,
        props: true
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
        meta: {
            title: 'Privacy Policy | Second Hand Cars',
            // metaTags: [
            //   {
            //     name: 'description',
            //     content: 'View our wide range of demo cars for sale at Second Hand Cars, all vehicles mileage under 2500km. Enquire Now'
            //   },
            //   {
            //     property: 'og:description',
            //     content: 'View our wide range of demo cars for sale at Second Hand Cars, all vehicles mileage under 2500km. Enquire Now'
            //   }
            // ]
        },
    },
    {
        path: '/terms-and-conditions',
        name: 'TermsAndConditions',
        component: TermsAndConditions,
        meta: {
            title: 'Terms & Conditions | Second Hand Cars',
            // metaTags: [
            //   {
            //     name: 'description',
            //     content: 'View our wide range of demo cars for sale at Second Hand Cars, all vehicles mileage under 2500km. Enquire Now'
            //   },
            //   {
            //     property: 'og:description',
            //     content: 'View our wide range of demo cars for sale at Second Hand Cars, all vehicles mileage under 2500km. Enquire Now'
            //   }
            // ]
        },
    },
    {
        path: '/articles',
        name: 'Articles',
        component: Articles,
        meta: {
            title: 'Articles | Second Hand Cars',
        },
    },
    {
        path: '/article/:Title',
        name: 'ArticlesPage',
        component: ArticlesPage,
        props: true
    },
    {
        path: '/usedcar/:Makename/:Modelname/:VehicleId',
        name: 'ViewCar',
        component: ViewCar,
        props: true
    },
    {
        path: '/enquire-now-thank-you/:Dealer_Name',
        name: 'ThankYou',
        component: ThankYou,
        props: true
    },
    {
        path: '/contact-us/thank-you/',
        name: 'ContactThankYou',
        component: ContactThankYou,
    },
    {
        path: '/:Dealer_Name/thank-you/',
        name: 'DealerThankyou',
        component: DealerThankyou,
        props: true
    },
    {
        path: '/insurance/thank-you/',
        name: 'InsuranceThankYou',
        component: InsuranceThankYou,
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs,
        meta: {
            gtm: "ContactUs",
            title: 'Contact Second Hand Cars | info@secondhandcars.co.za | Second Hand Cars',
            metaTags: [{
                    name: 'description',
                    content: 'Contact Second Hand Cars today to view our range of used and demo cars avaliable.'
                },
                {
                    property: 'og:description',
                    content: 'Contact Second Hand Cars today to view our range of used and demo cars avaliable.'
                }
            ]
        },
    }
]
let route1 = routes;
const router1 = new VueRouter({ route1 });
// import VueGtm from '@gtm-support/vue2-gtm';
// Vue.use(VueGtm, ({
//     id: 'GTM-5BT3D43',
//     defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
//     compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
//     nonce: '2726c7f26c', // Will add `nonce` to the script tag
//     enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
//     debug: true, // Whether or not display console logs debugs (optional)
//     loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
//     vueRouter: router1, // Pass the router instance to automatically sync with router (optional)
//     ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
//     trackOnNextTick: false,
// }));
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
    routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router