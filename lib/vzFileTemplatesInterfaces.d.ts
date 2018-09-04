declare module 'vz-file-templates' {
    interface IProjectItemTemplateRunSettings {
        destPath: string;
        getTextReplacement(key: string): string;
        setTextReplacement(key: string, value: string): void;
        getInputNameVariable(): string;
        getFileInputNameVariable(): string;
        applyReplacements(value: string): string;
        outputChannel: ITemplateOutputChannel;
        command: string;
        commandParameters: string[];
        setCommand(newCommand: string, newCommandParameters: string[]): void;
    }
    interface IProjectItemTemplate {
        run(settings: IProjectItemTemplateRunSettings): boolean;
    }
    interface IProjectItemWizard {
        getName(): string;
        run(template: IProjectItemTemplate, settings: IProjectItemTemplateRunSettings): void;
    }
    interface IVZFileTemplatesApi {
        registerTemplatesFolder(folderPath: string): void;
        registerWizard(wizard: IProjectItemWizard): void;
    }
    interface ITemplateOutputChannel {
        write(value: string): void;
        writeLine(value: string): void;
        show(): void;
        hide(): void;
    }
}
