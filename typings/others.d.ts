declare namespace Hget {

    interface Options {

        root?:     string;
        ignore?:   string | string[];
        html?:     boolean;
        markdown?: boolean;
    }

    interface Static {

        (url: string, options?: Hget.Options): string;
    }
}

declare var hget: Hget.Static;

declare module "hget" {

    export = hget;
}

declare namespace Marked {

    interface Options {

        highlight?: (code: string, lang?: string, callback?: Callback) => string;
        renderer?: Renderer;
    }

    interface Callback {

        (err: Error, content: string): void;
    }

    interface RendererStatic {

        new (): Renderer;
    }

    interface Renderer {

        code: (code: string, language: string) => string;
        blockquote: (quote: string) => string;
        html: (html: string) => string;
        heading: (text: string, level: number) => string;
        hr: () => string;
        list: (body: string, ordered: boolean) => string;
        listitem: (text: string) => string;
        paragraph: (text: string) => string;
        table: (header: string, body: string) => string;
        tablerow: (context: string) => string;
        tablecell: (content: string, flags: TablecellFlags) => string;
        strong: (text: string) => string;
        em: (text: string) => string;
        codespan: (code: string) => string;
        br: () => string;
        del: (text: string) => string;
        link: (href: string, title: string, text: string) => string;
        image: (href: string, title: string, text: string) => string;
    }

    interface TablecellFlags {

        header: boolean;
        align: "center" | "left" | "right";
    }

    interface Lexer {

        lex: (text: string) => any;
        rules: any;
    }

    interface Static {

        (url: string, callback?: Callback): string;
        (url: string, options?: Options, callback?: Callback): string;
        setOptions: (options?: Options) => void;
        Renderer: RendererStatic;
        gfm: boolean;
        tables: boolean;
        breaks: boolean;
        pedantic: boolean;
        sanitize: boolean;
        smartLists: boolean;
        smartypants: boolean;
        lexer: (text: string, options: any) => Lexer;
    }
}

declare var marked: Marked.Static;

declare module "marked" {

    export = marked;
}

declare namespace MarkedTerminal {

    interface TerminalRenderer extends Marked.Renderer {

        width: number;
        reflowText: boolean;
        showSectionPrefix: boolean;
        unescape: boolean;
        emoji: boolean;
        tableOptions: any;
    }

    interface TerminalRendererStatic {

        new (options?: TerminalRenderer): TerminalRenderer;
    }
}

declare var TerminalRenderer: MarkedTerminal.TerminalRendererStatic;

declare module "marked-terminal" {

    export = TerminalRenderer;
}
