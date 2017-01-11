export class MenuItemModel {
    id: number;
    default_display_type: string;
    type: string;
    group: string; // optional
    media: string; // optional
    label: string;
    url_link: string;
    secondary: boolean;
    subitems: Array<MenuItemModel>;
    display_on_page_sitemap: boolean;
    navigation_banner
    main_banner: MenuBannerModel;
    page_type
    display_on_page_sitemap
}
