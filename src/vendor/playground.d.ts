declare type Sandbox = ReturnType<typeof import('./sandbox').createTypeScriptSandbox>;
/** The interface of all sidebar plugins */
export interface PlaygroundPlugin {
    /** Not public facing */
    id: string;
    /** To show in the tabs */
    displayName: string;
    /** Should this plugin be selected on launch? */
    shouldBeSelected?: () => boolean;
    /** Before we show the tab, use this to set up your HTML - it will all be removed whe*/
    willMount?: (sandbox: Sandbox, container: HTMLDivElement) => void;
    /** After we show the tab */
    didMount?: (sandbox: Sandbox, container: HTMLDivElement) => void;
    /** Model changes while this plugin is front-most  */
    modelChanged?: (sandbox: Sandbox, model: import('monaco-editor').editor.ITextModel) => void;
    /** Delayed model changes while this plugin is front-most, useful when you are working with the TS API because it won't run on every keypress */
    modelChangedDebounce?: (sandbox: Sandbox, model: import('monaco-editor').editor.ITextModel) => void;
    /** Before we remove the tab */
    willUnmount?: (sandbox: Sandbox, container: HTMLDivElement) => void;
    /** Before we remove the tab */
    didUnmount?: (sandbox: Sandbox, container: HTMLDivElement) => void;
}
interface PlaygroundConfig {
    lang: string;
    prefix: string;
}
export declare const setupPlayground: (sandbox: {
    config: {
        text: string;
        useJavaScript: boolean;
        compilerOptions: import("monaco-editor").languages.typescript.CompilerOptions;
        monacoSettings?: import("monaco-editor").editor.IEditorOptions | undefined;
        acquireTypes: boolean;
        supportTwoslashCompilerOptions: boolean;
        suppressAutomaticallyGettingDefaultText?: true | undefined;
        suppressAutomaticallyGettingCompilerFlags?: true | undefined;
        logger: {
            log: (...args: any[]) => void;
            error: (...args: any[]) => void;
        };
        domID: string;
    };
    editor: import("monaco-editor").editor.IStandaloneCodeEditor;
    // getWorkerProcess: () => Promise<import("typescriptlang-org/static/js/sandbox/tsWorker").TypeScriptWorker>;
    getEmitResult: () => Promise<import("typescript").EmitOutput>;
    getRunnableJS: () => Promise<string>;
    getDTSForCode: () => Promise<string>;
    getDomNode: () => HTMLElement;
    getModel: () => import("monaco-editor").editor.ITextModel;
    getText: () => string;
    setText: (text: string) => void;
    getAST: () => import("typescript").SourceFile;
    ts: typeof import("typescript");
    createTSProgram: () => import("typescript").Program;
    compilerDefaults: import("monaco-editor").languages.typescript.CompilerOptions;
    getCompilerOptions: () => import("monaco-editor").languages.typescript.CompilerOptions;
    setCompilerSettings: (opts: import("monaco-editor").languages.typescript.CompilerOptions) => void;
    updateCompilerSetting: (key: string | number, value: any) => void;
    updateCompilerSettings: (opts: import("monaco-editor").languages.typescript.CompilerOptions) => void;
    getTwoSlashComplierOptions: (code: string) => any;
    setDidUpdateCompilerSettings: (func: (opts: import("monaco-editor").languages.typescript.CompilerOptions) => void) => void;
    supportedVersions: readonly ["3.7.5", "3.6.3", "3.5.1", "3.3.3", "3.1.6", "3.0.1", "2.8.1", "2.7.2", "2.4.1"];
    // lzstring: typeof import("typescriptlang-org/static/js/sandbox/vendor/lzstring.min");
    getURLQueryWithCompilerOptions: (sandbox: any, paramOverrides?: any) => string;
    language: string;
    monaco: typeof import("monaco-editor");
}, monaco: typeof import("monaco-editor"), config: PlaygroundConfig) => {
    exporter: {
        openProjectInStackBlitz: () => void;
        openProjectInCodeSandbox: () => void;
        reportIssue: () => Promise<void>;
        copyAsMarkdownIssue: () => Promise<void>;
        copyForChat: () => void;
        copyForChatWithPreview: () => void;
        openInTSAST: () => void;
    };
    // ui: import("./createUI").UI;
};
export declare type Playground = ReturnType<typeof setupPlayground>;
export {};
