declare module 'vz-file-templates-api' {
    interface IProjectItemTemplateRunSettings {
        destPath: string;
        getTextReplacement(key: string): string;
        setTextReplacement(key: string, value: string): void;
        getInputNameVariable(): string;
        getFileInputNameVariable(): string;
        applyReplacements(value: string): string;
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
}
