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
        },
        {
            id: 'AntiPersonnel',
            title: 'AntiPersonnel',
            type: 'item',
            url: '/AntiPersonnel',
            icon: icons.PlusCircleOutlined,
            breadcrumbs: false
        },
        {
            id: 'AntiFamiliaux',
            title: 'AntiFamiliaux',
            type: 'item',
            url: '/AntiFamiliaux',
            icon: icons.PlusCircleOutlined,
            breadcrumbs: false
        },
        {
            id: 'Paraclinique',
            title: 'Paraclinique',
            type: 'item',
            url: '/Paraclinique',
            icon: icons.PlusCircleOutlined,
            breadcrumbs: false
        },
        {
            id: 'ExamenPhysique',
            title: 'ExamenPhysique',
            type: 'item',
            url: '/ExamenPhysique',
            icon: icons.PlusCircleOutlined,
            breadcrumbs: false
        },
        {
            id: 'DiagnosticRetenuPEC',
            title: 'DiagnosticRetenuPEC',
            type: 'item',
            url: '/DiagnosticRetenuPEC',
            icon: icons.PlusCircleOutlined,
            breadcrumbs: false
        },
        {
            id: 'Suivi',
            title: 'Suivi',
            type: 'item',
            url: '/Suivi',
            icon: icons.PlusCircleOutlined,
            breadcrumbs: false
        }
    ]
};
export default dashboard;
