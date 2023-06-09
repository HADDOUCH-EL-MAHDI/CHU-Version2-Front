// assets
import { DashboardOutlined,HomeOutlined,PlusCircleOutlined } from '@ant-design/icons';


// icons
const icons = {
    DashboardOutlined,
    HomeOutlined,
    PlusCircleOutlined
};


// ==============================|| MENU ITEMS - DASHBOARD ||============================== //
const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Tableau de bord',
            type: 'item',
            url: '/',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/',
            icon: icons.HomeOutlined,
            breadcrumbs: false
        },
        {
            id: 'Identite',
            title: 'Ajouter patient',
            type: 'item',
            url: '/Identite',
            icon: icons.PlusCircleOutlined,
            breadcrumbs: false
        }
    ]
};
export default dashboard;
