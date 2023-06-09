import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from './PrivateRoute';

//Patient
const Identite = Loadable(lazy(() => import('../../src/DossierVert/Identite')));
const AntiPersonnel = Loadable(lazy(() => import('../../src/DossierVert/AntiPersonnel')));
const AntiFamiliaux = Loadable(lazy(() => import('../../src/DossierVert/AntiFamiliaux')));
const ExamenPhysique = Loadable(lazy(() => import('../../src/DossierVert/ExamenPhysique')));
const Paraclinique = Loadable(lazy(() => import('../../src/DossierVert/Paraclinique')));
const DiagnosticRetenuPEC = Loadable(lazy(() => import('../../src/DossierVert/DiagnosticRetenuPEC')));
const Suivi = Loadable(lazy(() => import('../../src/DossierVert/Suivi')));




// render - dashboard
const DashboardDefaultOld = Loadable(lazy(() => import('pages-old/dashboard')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages-old/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages-old/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages-old/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages-old/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages-old/components-overview/AntIcons')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        // ======= Template route, For reference ====== //
        {
            path: '/old',
            element: <DashboardDefaultOld />
        },
        {
            path: 'old/color',
            element: <Color />
        },
        {
            path: 'old/dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefaultOld />
                }
            ]
        },
        {
            path: 'old/sample-page',
            element: <SamplePage />
        },
        {
            path: 'old/shadow',
            element: <Shadow />
        },
        {
            path: 'old/typography',
            element: <Typography />
        },
        {
            path: 'old/icons/ant',
            element: <AntIcons />
        },
        { 
            path: 'Identite',
            element: <Identite/>
        },
        {
            path: 'AntiPersonnel',
            element: <AntiPersonnel/>
        },
        {
            path: 'AntiFamiliaux',
            element: <AntiFamiliaux/>
        },
        {
            path: 'ExamenPhysique',
            element: <ExamenPhysique/>
        },
        {
            path: 'Paraclinique',
            element: <Paraclinique/>
        },
        {
            path: 'DiagnosticRetenuPEC',
            element: <DiagnosticRetenuPEC/>
        },
        {
            path: 'Suivi',
            element: <Suivi/>
        }
        
    ]
};

export default MainRoutes;
