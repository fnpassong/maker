import free from '../assets/icon-free.svg';
import paid from '../assets/icon-paid.svg';
export const PlanData = [
    {
        id:1,
        cName: 'dip',
        cClass: '',
        meta: 'Dip your toe',
        data: 'Just getting started? No problem at all! Our free plan will take you a long way.',
        title: 'Free',
        l1:'Unlimited products',
        l2: 'Basic analytics',
        l3: 'Limited marketplace exposure',
        l4: '10% fee per transaction',
        img: free,
    },

    {
        id:2,
        cName: 'dive',
        cClass: 'reversed',
        meta: 'Dive right in',
        data: 'Ready for the big time? Our paid plan will help you take your business to the next level.',
        title: '$25.00',
        desp:'/month',
        l1: 'Custom domain',
        l2: 'Advanced analytics and reports',
        l3: 'High marketplace visibility',
        l4: '5% fee per transaction',
        img: paid,
    }
]