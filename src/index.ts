import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the @yunfzhou/jet_helloworld extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@yunfzhou/jet_helloworld:plugin',
  description: 'Minimal JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('@yunfzhou: The JupyterLab main application:', app);
  }
};

export default plugin;
