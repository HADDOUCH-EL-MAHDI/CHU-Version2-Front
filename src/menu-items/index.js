// project import
import pages from './pages';
import dashboard from './dashboard';
import utilities from './utilities';
import support from './support';
import Identite from '../../src/DossierVert/Identite'
import AntiPersonnel from 'DossierVert/AntiPersonnel';
import AntiFamiliaux from 'DossierVert/AntiFamiliaux';
import Paraclinique from 'DossierVert/Paraclinique';
import ExamenPhysique from 'DossierVert/ExamenPhysique';
import DiagnosticRetenuPEC from 'DossierVert/DiagnosticRetenuPEC';
import Suivi from 'DossierVert/Suivi';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, Identite,AntiPersonnel,AntiFamiliaux,Paraclinique,ExamenPhysique,
    DiagnosticRetenuPEC,Suivi]
};

export default menuItems;
