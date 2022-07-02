
const entitiesIndex = () => import ('./components/Entities/Index.vue');
const entitiesCreate = () => import ('./components/Entities/Create.vue');
const entitiesEdit = () => import ('./components/Entities/Edit.vue');

const usersIndex = () => import ('./components/Users/Index.vue');
const usersCreate = () => import ('./components/Users/Create.vue');
const usersEdit = () => import ('./components/Users/Edit.vue');

const emailsIndex = () => import ('./components/Emails/Index.vue');
const emailsCreate = () => import ('./components/Emails/Create.vue');
const emailsShow = () => import ('./components/Emails/Show.vue');

export const routes = [
    {
        name:'home',path: '/', component: emailsIndex
    },
    {
        name:'entities',path: '/entities', component: entitiesIndex
    },
    {
        name:'createEntity',path: '/entities/crear', component: entitiesCreate
    },
    {
        name:'editEntity',path: '/entities/:id', component: entitiesEdit
    },

    {
        name:'emails',path: '/emails', component: emailsIndex
    },
    {
        name:'createEmail',path: '/emails/crear', component: emailsCreate
    },

    {
        name:'showEmail',path: '/emails/:id', component: emailsShow
    },

    {
        name:'users',path: '/users', component: usersIndex
    },
    {
        name:'createUser',path: '/users/crear', component: usersCreate
    },
    {
        name:'editUser',path: '/users/:id', component: usersEdit
    },
]