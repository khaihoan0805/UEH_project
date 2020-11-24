import Home from '../views/Booking.vue'
import Form from '../views/Form.vue'
import { createRouter,createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/admin/bookingList',
        name: 'Booking',
        component: Home
    },
    {
        path: '/order',
        name: 'Form',
        component: Form
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router