import {
    CalculatorIcon, CookieIcon,
    LayoutDashboardIcon, ListDetailsIcon, LoginIcon, UserPlusIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    { header: 'Utilitaires' },
    {
        title: 'Calculateur de calories',
        icon: CalculatorIcon,
        to: '/ui/typography'
    },
    {
        title: 'Mes recettes',
        icon: ListDetailsIcon,
        to: '/RecipesList'
    },
    {
        title: 'Liste des aliments',
        icon: CookieIcon,
        to: '/ui/shadow'
    },
    { header: 'Admin' },
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/auth/login'
    },
    {
        title: 'Register',
        icon: UserPlusIcon,
        to: '/auth/register'
    },
];

export default sidebarItem;
