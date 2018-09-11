# VZ File Templates

NPM package containing public interfaces exposed by VZ File Templates extension for Visual Studio Code

# Change Log

## 1.0.1
  - ITemplateRunSettingsProcessor interface added. It allows to  implement additional logic populating template variables in dependent extensions. 

## 0.0.7
  - ITemplateOutputChannel interface added
  - New properties and functions added to IProjectItemTemplateRunSettings interface:
    - outputChannel : ITemplateOutputChannel;
    - command : string;
    - commandParameters : string[];
    - setCommand(newCommand : string, newCommandParameters : string[]) : void;

## 0.0.6
 - First version of vz-file-templates api published