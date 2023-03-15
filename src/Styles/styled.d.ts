import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            main: string;
            header: string;
            sidebar: string;
            icons: string;
            borders: string;
            tableTh: string;
            textTh: string;
            text: string;
            title: string;
        }
    }
}