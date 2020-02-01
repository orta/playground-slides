type TypeScriptWorker = any;
// import { TypeScriptWorker } from './tsWorker';// import lzstring from './vendor/lzstring.min';
declare type CompilerOptions = import('monaco-editor').languages.typescript.CompilerOptions;
/**
 * These are settings for the playground which are the equivalent to props in React
 * any changes to it should require a new setup of the playground
 */
export declare type PlaygroundConfig = {
    /** The default source code for the playground */
    text: string;
    /** Should it run the ts or js IDE services */
    useJavaScript: boolean;
    /** Compiler options which are automatically just forwarded on */
    compilerOptions: CompilerOptions;
    /** Optional monaco settings overrides */
    monacoSettings?: import('monaco-editor').editor.IEditorOptions;
    /** Acquire types via type acquisition */
    acquireTypes: boolean;
    /** Support twoslash compiler options */
    supportTwoslashCompilerOptions: boolean;
    /** Get the text via query params and local storage, useful when the editor is the main experience */
    suppressAutomaticallyGettingDefaultText?: true;
    /** Suppress setting compiler options from the compiler flags from query params */
    suppressAutomaticallyGettingCompilerFlags?: true;
    /** Logging system */
    logger: {
        log: (...args: any[]) => void;
        error: (...args: any[]) => void;
    };
} & ({
    domID: string;
} | {
    elementToAppend: HTMLElement;
});
/** The default settings which we apply a partial over */
export declare function defaultPlaygroundSettings(): {
    /** The default source code for the playground */
    text: string;
    /** Should it run the ts or js IDE services */
    useJavaScript: boolean;
    /** Compiler options which are automatically just forwarded on */
    compilerOptions: import("monaco-editor").languages.typescript.CompilerOptions;
    /** Optional monaco settings overrides */
    monacoSettings?: import("monaco-editor").editor.IEditorOptions | undefined;
    /** Acquire types via type acquisition */
    acquireTypes: boolean;
    /** Support twoslash compiler options */
    supportTwoslashCompilerOptions: boolean;
    /** Get the text via query params and local storage, useful when the editor is the main experience */
    suppressAutomaticallyGettingDefaultText?: true | undefined;
    /** Suppress setting compiler options from the compiler flags from query params */
    suppressAutomaticallyGettingCompilerFlags?: true | undefined;
    /** Logging system */
    logger: {
        log: (...args: any[]) => void;
        error: (...args: any[]) => void;
    };
} & {
    domID: string;
};
/** Creates a sandbox editor, and returns a set of useful functions and the editor */
export declare const createTypeScriptSandbox: (partialConfig: Partial<{
    /** The default source code for the playground */
    text: string;
    /** Should it run the ts or js IDE services */
    useJavaScript: boolean;
    /** Compiler options which are automatically just forwarded on */
    compilerOptions: import("monaco-editor").languages.typescript.CompilerOptions;
    /** Optional monaco settings overrides */
    monacoSettings?: import("monaco-editor").editor.IEditorOptions | undefined;
    /** Acquire types via type acquisition */
    acquireTypes: boolean;
    /** Support twoslash compiler options */
    supportTwoslashCompilerOptions: boolean;
    /** Get the text via query params and local storage, useful when the editor is the main experience */
    suppressAutomaticallyGettingDefaultText?: true | undefined;
    /** Suppress setting compiler options from the compiler flags from query params */
    suppressAutomaticallyGettingCompilerFlags?: true | undefined;
    /** Logging system */
    logger: {
        log: (...args: any[]) => void;
        error: (...args: any[]) => void;
    };
} & {
    domID: string;
}> | Partial<{
    /** The default source code for the playground */
    text: string;
    /** Should it run the ts or js IDE services */
    useJavaScript: boolean;
    /** Compiler options which are automatically just forwarded on */
    compilerOptions: import("monaco-editor").languages.typescript.CompilerOptions;
    /** Optional monaco settings overrides */
    monacoSettings?: import("monaco-editor").editor.IEditorOptions | undefined;
    /** Acquire types via type acquisition */
    acquireTypes: boolean;
    /** Support twoslash compiler options */
    supportTwoslashCompilerOptions: boolean;
    /** Get the text via query params and local storage, useful when the editor is the main experience */
    suppressAutomaticallyGettingDefaultText?: true | undefined;
    /** Suppress setting compiler options from the compiler flags from query params */
    suppressAutomaticallyGettingCompilerFlags?: true | undefined;
    /** Logging system */
    logger: {
        log: (...args: any[]) => void;
        error: (...args: any[]) => void;
    };
} & {
    elementToAppend: HTMLElement;
}>, monaco: typeof import("monaco-editor"), ts: typeof import("typescript")) => {
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
    getWorkerProcess: () => Promise<TypeScriptWorker>;
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
    // lzstring: typeof lzstring;
    getURLQueryWithCompilerOptions: (sandbox: any, paramOverrides?: any) => string;
    language: string;
    monaco: typeof import("monaco-editor");
};
export {};
