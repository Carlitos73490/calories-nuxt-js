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
    {
        title: 'Mes recettes',
        icon: ListDetailsIcon,
        to: '/RecipesList'
    },
    { header: 'Admin' },
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/auth/login'
    }
];

export default sidebarItem;
